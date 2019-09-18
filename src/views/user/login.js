import React, { Component } from 'react'
import { Row, Card, CardTitle, Form, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser } from '../../redux/actions'
import { Colxx } from '../../components/common/CustomBootstrap'
import IntlMessages from '../../helpers/IntlMessages'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    onUserLogin() {
        if (this.state.email !== '' && this.state.password !== '') {
            this.props.loginUser(this.state, this.props.history)
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Row className="h-100">
                <Colxx xxs="12" md="10" className="mx-auto my-auto">
                    <Card className="auth-card">
                        <div className="position-relative image-side ">
                            <p className="text-white h2">
                                MAGIC IS IN THE DETAILS
                            </p>
                            <p className="white mb-0">
                                Please use your credentials to login.
                                <br />
                                If you are not a member, please{' '}
                                <NavLink
                                    to={`/user/register`}
                                    className="white"
                                >
                                    register
                                </NavLink>
                                .
                            </p>
                        </div>
                        <div className="form-side">
                            <NavLink to={`/`} className="white"></NavLink>
                            <CardTitle className="mb-4">
                                <IntlMessages id="user.login-title" />
                            </CardTitle>
                            <Form>
                                <Label className="form-group has-float-label mb-4">
                                    <Input
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    <IntlMessages id="user.email" />
                                </Label>
                                <Label className="form-group has-float-label mb-4">
                                    <Input
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    <IntlMessages id="user.password" />
                                </Label>
                                <div className="d-flex justify-content-between align-items-center">
                                    <NavLink to={`/user/forgot-password`}>
                                        <IntlMessages id="user.forgot-password-question" />
                                    </NavLink>
                                    <Button
                                        color="primary"
                                        className="btn-shadow"
                                        size="lg"
                                        onClick={() => this.onUserLogin()}
                                    >
                                        <IntlMessages id="user.login-button" />
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Card>
                </Colxx>
            </Row>
        )
    }
}
const mapStateToProps = ({ authUser }) => {
    const { user, loading } = authUser
    return { user, loading }
}

export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(Login)
