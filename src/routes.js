import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MainLayout } from 'modules/layout/containers';
import BoardRoutes from 'modules/board/routes';
import HomeRoutes from 'modules/home/routes';

const Routes = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        {HomeRoutes}
        {BoardRoutes}
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Routes;
