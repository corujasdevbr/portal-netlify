import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const PaymentListPages = React.lazy(() =>
  import(/* webpackChunkName: "mypayments-payment-list" */ './payment-list')
);

const MyPayments = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/payment-list`}
      />
      <Route
        path={`${match.url}/payment-list`}
        render={props => <PaymentListPages {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default MyPayments;
