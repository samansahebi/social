import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Chat from 'components/Chat';

import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import Network from 'pages/Network';
import Messages from 'pages/Messages';
import Jobs from 'pages/Jobs';
import Notifications from 'pages/Notifications';
import Premium from 'pages/Premium';
import Container from './styles';
import Connections from 'pages/Connections';
import SignUp from 'pages/Login/SignUp';
import SignUp2 from 'pages/Login/SignUp2';
import OTP from 'pages/Login/otp';

const routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/SignUp2" exact component={SignUp2} />
      <Route path="/otp" exact component={OTP} />
      <Route path="/premium" component={Premium} />
      <Container>
        {window.location.pathname !== "/" && window.location.pathname !== "/premium" && (
          <>
            <Header />
            <Chat />
          </>
        )}
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/network" component={Network} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/messages" component={Messages} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/connections" component={Connections} />
      </Container>
    </Switch>
  </BrowserRouter>
);

export default routes;
