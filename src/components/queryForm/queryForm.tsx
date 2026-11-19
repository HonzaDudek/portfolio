import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Alert, Button, styled, TextField } from '@mui/material';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  query: string;
}

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 'auto',

  '& .MuiInputLabel-root': {
    color: 'black',
  },
});

const StyledTextField = styled(TextField)({
  marginBottom: 10,
});

export const QueryForm = (): JSX.Element => {
  const { control, handleSubmit, reset } = useForm<IFormInputs>();
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit: SubmitHandler<IFormInputs> = async data => {
    setStatus('sending');
    try {
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: data.email,
          fullname: `${data.firstName} ${data.lastName}`,
          subject: 'Poptávka z webu honzadudek.cz',
          message: `${data.query}\n\nTelefon: ${data.phone}`,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!res.ok) {
        // A 404 returns an HTML page, so only parse JSON when it looks like JSON
        const isJson = res.headers.get('content-type')?.includes('application/json');
        const body = isJson ? await res.json() : null;
        throw new Error(body?.error || `Request failed with status ${res.status}`);
      }

      setStatus('sent');
      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <StyledTextField
            id='firstName'
            label='Jméno'
            variant='outlined'
            {...field}
          />
        )}
      />
      <Controller
        name='lastName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <StyledTextField
            id='lastName'
            label='Příjmení'
            variant='outlined'
            {...field}
          />
        )}
      />
      <Controller
        name='email'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <StyledTextField
            id='email'
            label='E-mail'
            variant='outlined'
            {...field}
          />
        )}
      />
      <Controller
        name='phone'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <StyledTextField
            id='phone'
            label='Telefon'
            variant='outlined'
            {...field}
          />
        )}
      />
      <Controller
        name='query'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <StyledTextField
            id='query'
            label='Popis projektu'
            variant='outlined'
            {...field}
            multiline
            rows={5}
          />
        )}
      />
      <Button
        variant={'outlined'}
        color='primary'
        type={'submit'}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Odesílám…' : 'Odeslat'}
      </Button>
      {status === 'sent' && (
        <Alert severity='success' sx={{ mt: 1 }}>
          Děkuji, zpráva byla odeslána.
        </Alert>
      )}
      {status === 'error' && (
        <Alert severity='error' sx={{ mt: 1 }}>
          Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo mi napište e-mail.
        </Alert>
      )}
    </StyledForm>
  );
};
