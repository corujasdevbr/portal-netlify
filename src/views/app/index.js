import React, { Component, Suspense } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import AppLayout from '../../layout/AppLayout'

//import MyPayments from './mypayments';

const RedirectPage = React.lazy(() => import('./redirect'))
const Dashboards = React.lazy(() => import('./dashboards'))

const Menu = React.lazy(() => import('./menu'))
const BlankPage = React.lazy(() => import('./blank-page'))
const MyProject = React.lazy(() => import('./myprojects'))

const MyPayments = React.lazy(() => import('./mypayments'))

const Profile = React.lazy(() => import('./profile'))

const EditorDashboards = React.lazy(() => import('./editor-dashboards'))

const EditorMyProject = React.lazy(() => import('./editor-myprojects'))

const EditorMyPayments = React.lazy(() => import('./editor-mypayments'))
const EditorProfile = React.lazy(() => import('./editor-profile'))

const BusinessDashboards = React.lazy(() => import('./business-dashboards'))

const BusinessMyProject = React.lazy(() => import('./business-myprojects'))

const BusinessMyPayments = React.lazy(() => import('./business-mypayments'))
const BusinessProfile = React.lazy(() => import('./business-profile'))

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            group: localStorage.getItem('userGroup'),
        }
    }
    render() {
        const { match } = this.props
        return (
            <AppLayout>
                <div className="dashboard-wrapper">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect
                                exact
                                from={`${match.url}/`}
                                to={`${match.url}/redirect`}
                            />
                            <Route
                                path={`${match.url}/redirect`}
                                render={props => <RedirectPage {...props} />}
                            />
                            <Route
                                path={`${match.url}/dashboards`}
                                render={props => <Dashboards {...props} />}
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
                                render={props => (
                                    <EditorDashboards {...props} />
                                )}
                            />
                            <Route
                                path={`${match.url}/editor-myprojects`}
                                render={props => <EditorMyProject {...props} />}
                            />
                            <Route
                                path={`${match.url}/editor-mypayments`}
                                render={props => (
                                    <EditorMyPayments {...props} />
                                )}
                            />
                            <Route
                                path={`${match.url}/editor-profile`}
                                render={props => <EditorProfile {...props} />}
                            />
                            <Route
                                path={`${match.url}/business-dashboards`}
                                render={props => (
                                    <BusinessDashboards {...props} />
                                )}
                            />

                            <Route
                                path={`${match.url}/business-myprojects`}
                                render={props => (
                                    <BusinessMyProject {...props} />
                                )}
                            />
                            <Route
                                path={`${match.url}/business-mypayments`}
                                render={props => (
                                    <BusinessMyPayments {...props} />
                                )}
                            />
                            <Route
                                path={`${match.url}/business-profile`}
                                render={props => <BusinessProfile {...props} />}
                            />
                            <Route
                                path={`${match.url}/blank-page`}
                                render={props => <BlankPage {...props} />}
                            />

                            <Redirect to="/error" />
                        </Switch>
                    </Suspense>
                </div>
            </AppLayout>
        )
    }
}
const mapStateToProps = ({ menu }) => {
    const { containerClassnames } = menu
    return { containerClassnames }
}

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(App)
)
