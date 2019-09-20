import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import AppLocale from './lang'
import ColorSwitcher from './components/common/ColorSwitcher'
import NotificationContainer from './components/common/react-notifications/NotificationContainer'
import { isMultiColorActive } from './constants/defaultValues'
import { getDirection } from './helpers/Utils'
import { getUserDetails } from './redux/actions'

const ViewMain = React.lazy(() => import('./views'))
const ViewApp = React.lazy(() => import('./views/app'))
const ViewUser = React.lazy(() => import('./views/user'))
const ViewError = React.lazy(() => import('./views/error'))

class App extends Component {
    constructor(props) {
        super(props)
        const direction = getDirection()
        if (direction.isRtl) {
            document.body.classList.add('rtl')
            document.body.classList.remove('ltr')
        } else {
            document.body.classList.add('ltr')
            document.body.classList.remove('rtl')
        }
    }
    componentDidMount() {
        this.props.getUserDetails()
    }

    render() {
        const { locale, loginUser } = this.props
        const currentAppLocale = AppLocale[locale]

        return (
            <div className="h-100">
                <IntlProvider
                    locale={currentAppLocale.locale}
                    messages={currentAppLocale.messages}
                >
                    <React.Fragment>
                        <NotificationContainer />
                        {isMultiColorActive && <ColorSwitcher />}
                        <Suspense fallback={<div className="loading" />}>
                            <Router>
                                <Switch>
                                    <Route
                                        path="/app"
                                        render={props => <ViewApp {...props} />}
                                    />
                                    <Route
                                        path="/user"
                                        render={props => (
                                            <ViewUser {...props} />
                                        )}
                                    />
                                    <Route
                                        path="/error"
                                        exact
                                        render={props => (
                                            <ViewError {...props} />
                                        )}
                                    />
                                    <Route
                                        path="/"
                                        exact
                                        render={props => (
                                            <ViewMain
                                                {...props}
                                                loginUser={loginUser}
                                            />
                                        )}
                                    />
                                    <Redirect to="/error" />
                                </Switch>
                            </Router>
                        </Suspense>
                    </React.Fragment>
                </IntlProvider>
            </div>
        )
    }
}

const mapStateToProps = ({ authUser, settings }) => {
    const { user: loginUser } = authUser
    const { locale } = settings
    return { loginUser, locale }
}
const mapActionsToProps = { getUserDetails }

export default connect(
    mapStateToProps,
    mapActionsToProps
)(App)
