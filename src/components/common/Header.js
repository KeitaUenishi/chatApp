import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useHistory } from 'react-router-dom';
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
            チャットルーム
          </Typography>
          <Button color="inherit" onClick={handleLogout}>ログアウト</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
