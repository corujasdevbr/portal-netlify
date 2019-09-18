import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

//import MyPayments from './mypayments';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);

const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const Dashboard = React.lazy(() => import(/* webpackChunkName: "dashboard" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);
const MyProject = React.lazy(() =>
  import(/* webpackChunkName: "myproject-default" */ './myprojects')
);

const MyPayments = React.lazy(() =>
  import(/* webpackChunkName: "mypayment" */ './mypayments')
);

const Profile = React.lazy(() =>
  import(/* webpackChunkName: "profile" */ './profile')
);

const EditorDashboards = React.lazy(() =>
  import(/* webpackChunkName: "editor-dashboards" */ './editor-dashboards')
);

const EditorMyProject = React.lazy(() =>
  import(/* webpackChunkName: "editor-myproject-default" */ './editor-myprojects')
);

const EditorMyPayments = React.lazy(() =>
  import(/* webpackChunkName: "editor-mypayment" */ './editor-mypayments')
);
const EditorProfile = React.lazy(() =>
  import(/* webpackChunkName: "editor-profile" */ './editor-profile')
);

const BusinessDashboards = React.lazy(() =>
  import(/* webpackChunkName: "business-dashboards" */ './business-dashboards')
);

const BusinessMyProject = React.lazy(() =>
  import(/* webpackChunkName: "business-myproject-default" */ './business-myprojects')
);

const BusinessMyPayments = React.lazy(() =>
  import(/* webpackChunkName: "business-mypayment" */ './business-mypayments')
);
const BusinessProfile = React.lazy(() =>
  import(/* webpackChunkName: "business-profile" */ './business-profile')
);


class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/dashboards`}
              />
              <Route
                path={`${match.url}/dashboards`}
                render={props => <Dashboards {...props} />}
              />
              
              <Route
                path={`${match.url}/blank-page`}
                render={props => <BlankPage {...props} />}
              />
              
              <Route
                path={`${match.url}/myprojects`}
                render={props => <MyProject {...props} />}
              />
               <Route
                path={`${match.url}/mypayments`}
                render={props => <MyPayments {...props} />}
              />
              <Route
                path={`${match.url}/profile`}
                render={props => <Profile {...props} />}
              />
              <Route
                path={`${match.url}/editor-dashboards`}
                render={props => <EditorDashboards {...props} />}
              />
              
              <Route
                path={`${match.url}/editor-myprojects`}
                render={props => <EditorMyProject {...props} />}
              />
               <Route
                path={`${match.url}/editor-mypayments`}
                render={props => <EditorMyPayments {...props} />}
              />
              <Route
                path={`${match.url}/editor-profile`}
                render={props => <EditorProfile {...props} />}
              />
              <Route
                path={`${match.url}/business-dashboards`}
                render={props => <BusinessDashboards {...props} />}
              />
              
              <Route
                path={`${match.url}/business-myprojects`}
                render={props => <BusinessMyProject {...props} />}
              />
               <Route
                path={`${match.url}/business-mypayments`}
                render={props => <BusinessMyPayments {...props} />}
              />
              <Route
                path={`${match.url}/business-profile`}
                render={props => <BusinessProfile {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
