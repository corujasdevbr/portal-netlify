import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const EditorDashboardDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './default')
);

const EditorDashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={props => <EditorDashboardDefault {...props} />}
      />
     
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default EditorDashboards;
