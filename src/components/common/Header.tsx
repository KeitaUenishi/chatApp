import React from 'react'
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { auth } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    left: '2.3em',
  },
}));

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut();
    history.push('/signin')
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" align="center" className={classes.title}>
            オレタチ ハナス バショ ココ
          </Typography>
          <Button color="inherit" onClick={handleLogout}>ログ アウト</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
