import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const EditorPaymentListPages = React.lazy(() =>
  import(/* webpackChunkName: "editor-mypayments-payment-list" */ './payment-list')
);

const EditorMyPayments = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/payment-list`}
      />
      <Route
        path={`${match.url}/payment-list`}
        render={props => <EditorPaymentListPages {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default EditorMyPayments;
