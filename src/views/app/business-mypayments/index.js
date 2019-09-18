import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const BusinessPaymentListPages = React.lazy(() =>
  import(/* webpackChunkName: "business-mypayments-payment-list" */ './payment-list')
);

const BusinessMyPayments = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/payment-list`}
      />
      <Route
        path={`${match.url}/payment-list`}
        render={props => <BusinessPaymentListPages {...props} />}
      />
      
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default BusinessMyPayments;
