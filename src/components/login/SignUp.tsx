import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { auth } from '../../firebase';
import { Copyright } from '../common/Copyright';
import { InputFormStyles } from '../styles/InputFormStyles';

export const SignUp = () => {
  const classes = InputFormStyles();
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!(event.target instanceof HTMLFormElement)) return;

    //TODO: any型をなくす
    const { email, password } = event.target.elements as any;

    try{
      await auth.createUserWithEmailAndPassword(
      email.value,
        password.value
      );
      history.push('/');
    }catch (error){
      if(error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <h1>ユーザ登録</h1>
        {error && <Typography style={{ color: 'red' }} component="h3" variant="h6">{error}</Typography>}
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="パスワード"
            name="password"
            type="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            登録
          </Button>
        </form>
      </div>
      <div>
        ログインページは<Link to={'/signin'}>こちら</Link>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}