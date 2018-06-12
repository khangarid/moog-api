import React from 'react';
import { Route } from 'react-router-dom';
import { Board, Single } from './containers';

export default [
  <Route key="board" exact path="/board" component={Board} />,
  <Route key="single" exact path="/single/:id" component={Single} />
];
