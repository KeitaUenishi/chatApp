import React, {useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { InputFormStyles } from './styles/InputFormStyles';
import { Copyright } from './common/Copyright';

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>
}

export const NameInputForm: React.FC<Props> = ({ setName }) => {
  const classes = InputFormStyles();
  const [disabled, setDisabled] = useState(true);
  const [inputString, setInputString] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = inputString === '';
    setDisabled(disabled)
  }, [inputString])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <div className={classes.text}>
            ココ ゲンシジン アツマル<br/>
            オマエ ナマエ ナニ<br/>
            ミンナ アタマ ゲンシ モドル<br/>
            ムズカシイ コトバ ヌゥゥゥン ナル<br/>
          </div>

        </Typography>
        <form 
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ナマエ…"
            name="name"
            autoFocus
            onChange={(e) => setInputString(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if(isComposed) return;

              if(e.key === 'Enter'){

                if (!(e.target instanceof HTMLInputElement)) return;

                setName(e.target.value);
                e.preventDefault();
              }
            }}
            onCompositionStart={() => {setIsComposed(true)}}
            onCompositionEnd={() => {setIsComposed(false)}}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={() => {
              setName(inputString)
            }}
          >
            ハジメル
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
