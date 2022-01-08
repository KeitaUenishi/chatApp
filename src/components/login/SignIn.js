import React, {useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { auth, provider } from '../../firebase';
import { Link, useHistory } from 'react-router-dom';
import { Copyright } from '../common/Copyright';
import { ImputFormStyles } from '../styles/ImputFormStyles';

export const SignIn = ({ setName }) => {
  const classes = ImputFormStyles();
  const history = useHistory();
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try{
      await auth.signInWithEmailAndPassword(
      email.value,
      password.value
      );
      history.push('/');
    }
    catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleSubmitOnGoogle = async (event) => {
    try{
      await auth.signInWithPopup(provider);
      history.push('/');
    } catch (error){
      setError(error.message);
    }
  }

  useEffect(() => {
    const disabled = string === '';
    setDisabled(disabled)
  }, [string])

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
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              if(isComposed) return;

              if(e.key === 'Enter'){
                setName(e.target.value);
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
            disabled={disabled}
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