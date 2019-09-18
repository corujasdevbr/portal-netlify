import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ProfilePages = React.lazy(() =>
  import(/* webpackChunkName: "profile-edit-profile" */ './edit-profile')
);

const Profile = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/edit-profile`}
      />
      <Route
        path={`${match.url}/edit-profile`}
        render={props => <ProfilePages {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default Profile;
