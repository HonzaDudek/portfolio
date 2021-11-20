import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, styled, TextField } from '@mui/material';

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
  const { control, handleSubmit } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async data => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: data.email,
        fullname: `${data.firstName} ${data.lastName}`,
        subject: 'Poptávka z webu honzadudek.cz',
        message: data.query,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return;
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
      <Button variant={'outlined'} color='primary' type={'submit'}>
        Odeslat
      </Button>
    </StyledForm>
  );
};
