import React from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
interface LoginForm {
  username: string;
  password: string;
  email?: string;
  errors?: string;
}
export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
    reset,
    resetField,
  } = useForm<LoginForm>({
    mode: 'onBlur',
  });
  const onValid = (data: LoginForm) => {
    console.log('valid');
    setError('errors', { message: 'Backend is offline sorry.' });
    setError('username', { message: 'Taken username already ' });
    //reset();
    //resetField('password');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  //console.log(`watch:${watch('username')}`);
  //setValue('username', 'hello');

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            message: 'The username should be longer than 5 chars.',
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) =>
              !value?.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        type="email"
        placeholder="Email"
        className={errors.email ? 'border-red-500' : ''}
      />
      {errors.email?.message}
      <input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="CreateAccount" />
      {errors.errors?.message}
    </form>
  );
}
