import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { auth } from '../../firebase';
import { Copyright } from '../common/Copyright';
import { ImputFormStyles } from '../styles/ImputFormStyles';

export const SignUp = () => {
  const classes = ImputFormStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try{
      await auth.createUserWithEmailAndPassword(
      email.value,
        password.value
      );
      history.push('/');
    }catch (error){
      setError(error.message);
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
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if(isComposed) return;

              if(e.key === 'Enter'){
                setEmail(e.target.value);
                e.preventDefault();
              }
            }}
            onCompositionStart={() => {setIsComposed(true)}}
            onCompositionEnd={() => {setIsComposed(false)}}
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
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if(isComposed) return;

              if(e.key === 'Enter'){
                setPassword(e.target.value);
                e.preventDefault();
              }
            }}
            onCompositionStart={() => {setIsComposed(true)}}
            onCompositionEnd={() => {setIsComposed(false)}}
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