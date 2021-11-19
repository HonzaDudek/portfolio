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

const FormDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  query: '',
};

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
  const { control, handleSubmit } = useForm<IFormInputs>(FormDefaultValues);

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <StyledTextField
            id='outlined-basic'
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
            id='outlined-basic'
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
            id='outlined-basic'
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
            id='outlined-basic'
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
            id='outlined-basic'
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
