import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Project = React.lazy(() =>
  import(/* webpackChunkName: "myproject-default" */ './project')
);

const BasicDataTable = React.lazy(() =>
  import(/* webpackChunkName: "myproject-basicdatatable" */ './basicdatatable')
);

const DataListPages = React.lazy(() =>
  import(/* webpackChunkName: "myproject-data-list" */ './data-list')
);

const BusinessProjectListPages = React.lazy(() =>
  import(/* webpackChunkName: "business-myproject-project-list" */ './project-list')
);

const Profile = React.lazy(() =>
  import(/* webpackChunkName: "profile" */ './profile')
);


const BusinessMyProjects = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/project-list`}
      />
      <Route
        path={`${match.url}/project`}
        render={props => <Project {...props} />}
      />
      <Route
        path={`${match.url}/basicdatatable`}
        render={props => <BasicDataTable {...props} />}
      />
      <Route
        path={`${match.url}/data-list`}
        render={props => <DataListPages {...props} />}
      />
       <Route
        path={`${match.url}/project-list`}
        render={props => <BusinessProjectListPages {...props} />}
      />
      <Route
        path={`${match.url}/profile`}
        render={props => <Profile {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default BusinessMyProjects;
