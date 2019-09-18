import React, { Component } from 'react'
import { Row, Card, CardTitle, Form, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser, loginUser } from '../../redux/actions'

import { Auth } from 'aws-amplify'
import uuid from 'uuid'

import IntlMessages from '../../helpers/IntlMessages'
import { Colxx } from '../../components/common/CustomBootstrap'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            group: '',
            confirmationCode: '',
            authUser: null
        }
    }
    onUserRegister() {
        if (this.state.email !== '' && this.state.password !== '') {
            this.props.registerUser(this.state, this.props.history)
            this.props.loginUser(this.state, this.props.history)
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async () => {
        try {
            const authUser = await Auth.signUp({
                username: this.state.email,
                password: this.state.password,
                attributes: {
                    'custom:group': this.state.group,
                    'custom:userId': uuid.v1(),
                    'custom:stage': '0'
                }
            })

            this.setState({
                ...this.state,
                authUser: authUser
            })
        } catch (e) {
            if (e.code === 'UsernameExistsException') {
                alert('This username is already taken')
            } else {
                console.log(e)
            }
        }
    }

    render() {
        const renderForm = () => {
            return (
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
                            name="group"
                            type="select"
                            value={this.state.group}
                            onChange={this.handleChange}
                        >
                            <option value="writer">Writer</option>
                            <option value="editor">Editor</option>
                            <option value="client">Client</option>
                        </Input>
                        {/* <IntlMessages id="user.group" /> */}
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
                    <div className="d-flex justify-content-end align-items-center">
                        <Button
                            color="primary"
                            className="btn-shadow"
                            size="lg"
                            onClick={() => this.handleSubmit()}
                        >
                            <IntlMessages id="user.register-button" />
                        </Button>
                    </div>
                </Form>
            )
        }

        const renderConfirmationForm = () => {
            return (
                <Form>
                    <Label className="form-group has-float-label mb-4">
                        <Input
                            name="confirmationCode"
                            value={this.state.confirmationCode}
                            onChange={this.handleChange}
                        />
                        {/* <IntlMessages id="user.confirmationCode" /> */}
                    </Label>
                    <div className="d-flex justify-content-end align-items-center">
                        <Button
                            color="primary"
                            className="btn-shadow"
                            size="lg"
                            onClick={() => this.onUserRegister()}
                        >
                            <IntlMessages id="user.register-button" />
                        </Button>
                    </div>
                </Form>
            )
        }

        return (
            <Row className="h-100">
                <Colxx xxs="12" md="10" className="mx-auto my-auto">
                    <Card className="auth-card">
                        <div className="position-relative image-side ">
                            <p className="text-white h2">
                                MAGIC IS IN THE DETAILS
                            </p>
                            <p className="white mb-0">
                                Please use this form to register. <br />
                                If you are a member, please{' '}
                                <NavLink to={`/user/login`} className="white">
                                    login
                                </NavLink>
                            </p>
                        </div>
                        <div className="form-side">
                            <NavLink to={`/`} className="white"></NavLink>
                            <CardTitle className="mb-4">
                                <IntlMessages id="user.register" />
                            </CardTitle>
                            {this.state.authUser
                                ? renderConfirmationForm()
                                : renderForm()}
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

const matchDispatchToProps = dispatch => {}

export default connect(
    mapStateToProps,
    {
        registerUser,
        loginUser
    }
)(Register)
