import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const BusinessProfilePages = React.lazy(() =>
  import(/* webpackChunkName: "business-profile-edit-profile" */ './edit-profile')
);

const BusinessProfile = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/edit-profile`}
      />
      <Route
        path={`${match.url}/edit-profile`}
        render={props => <BusinessProfilePages {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default BusinessProfile;
