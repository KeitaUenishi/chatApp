import React, {useState, useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LinkOther from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { auth } from '../firebase';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <LinkOther color="inherit" 
            href="https://uenishi.cloud/"
            target="_blank"
            rel="noopener">
        uenishi
      </LinkOther>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = ({ setName }) => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value);
    console.log(password.value);
    auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
  };

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