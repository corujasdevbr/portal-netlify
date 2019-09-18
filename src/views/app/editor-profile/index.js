import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const EditorProfilePages = React.lazy(() =>
  import(/* webpackChunkName: "editor-profile-edit-profile" */ './edit-profile')
);

const EditorProfile = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/edit-profile`}
      />
      <Route
        path={`${match.url}/edit-profile`}
        render={props => <EditorProfilePages {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default EditorProfile;
