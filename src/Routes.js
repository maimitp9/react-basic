import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Layout from './layout';
import Comment from './Comment';
import ContactUs from './ContactUs';
import NotFound from './NotFound';

export default () => (
  <Switch>
    <Route path='/' exact component={Layout} />
    <Route path='/comments' exact component={Comment} />
    <Route path='/contact' exact component={ContactUs} />
    <Route component={NotFound} />
  </Switch>
);
