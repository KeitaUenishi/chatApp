import React, {useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Copyright } from '../common/Copyright';
import { InputFormStyles } from '../styles/InputFormStyles';

import { auth, provider } from '../../firebase';

export const SignIn = () => {
  const classes = InputFormStyles();
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(!(event.target instanceof HTMLFormElement)) return;

    // TODO: any型をなくす
    const { email, password } = event.target.elements as any;

    try{
      await auth.signInWithEmailAndPassword(
        email.value,
        password.value
      );

      history.push('/');
    }
    catch (error) {
      if(error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const handleSubmitOnGoogle = async () => {
    try{
      await auth.signInWithPopup(provider);
      history.push('/');
    } catch (error){
      if(error instanceof Error) {
        setError(error.message);
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        {error && <Typography style={{ color: 'red' }} component="h3" variant="h6">{error}</Typography>}
        <form 
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
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
            ログイン
          </Button>

        </form>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmitOnGoogle}
        >
          Googleでログイン
        </Button>
      </div>
      <div>
        ユーザー登録は<Link to={'/signup'}>こちら</Link>から
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}