import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { SignIn } from './login/SignIn';
import { Main } from './Main';
import { SignUp } from './login/SignUp'
import { AuthProvider } from '../context/AuthContext';
import { Header } from './common/Header';

const useStyles = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();

  return(
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" >
          <Header/>
          <div className={classes.toolbarMargin}/>
          <Main />
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" >
          <SignIn />
        </Route>
      </BrowserRouter>
    </AuthProvider>
  );
};
