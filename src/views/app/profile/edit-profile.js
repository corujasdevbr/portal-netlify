import React, { useState, useEffect, Fragment } from 'react'
import { injectIntl } from 'react-intl'
import { Row } from 'reactstrap'
import IntlMessages from '../../../helpers/IntlMessages'
import { connect } from 'react-redux'
import {
    Card,
    CardBody,
    Input,
    CardTitle,
    FormGroup,
    Label,
    CustomInput,
    Button,
    Form,
} from 'reactstrap'
import { Colxx, Separator } from '../../../components/common/CustomBootstrap'
import Breadcrumb from '../../../containers/navs/Breadcrumb'
import { getUserDetails, deleteUser } from '../../../redux/actions'

const ProfilePages = props => {
    const { history } = props
    const [state, setState] = useState({
        userName: '',
        phone: '',
        email: '',
        weekdayAvailability: false,
        language: '',
        genre: '',
        vertical: '',
    })

    useEffect(() => {
        setState(props.userDetails)
    }, [props.userDetails])

    useEffect(() => {
        props.getUserDetails()
    }, [])

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleUserDelete = () => {
        props.deleteUser(history)
    }

    const { messages } = props.intl
    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb
                        heading="menu.edit-profile-page"
                        match={props.match}
                    />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label for="projectNameHorizontal" sm={2}>
                                        <IntlMessages id="forms.name" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <Input
                                            value={state.userName || ''}
                                            type="text"
                                            name="userName"
                                            id="nameHorizontal"
                                            placeholder={messages['forms.name']}
                                            onChange={handleChange}
                                        />
                                    </Colxx>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="typeHorizontal" sm={2}>
                                        <IntlMessages id="forms.phone" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <Input
                                            value={state.phone || ''}
                                            type="phone"
                                            name="phone"
                                            id="phoneHorizontal"
                                            placeholder={
                                                messages['forms.phone']
                                            }
                                            onChange={handleChange}
                                        />
                                    </Colxx>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="emailHorizontal" sm={2}>
                                        <IntlMessages id="forms.email" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <Input
                                            value={state.email || ''}
                                            type="text"
                                            name="email"
                                            id="emailHorizontal"
                                            placeholder={
                                                messages['forms.email']
                                            }
                                            onChange={handleChange}
                                        />
                                    </Colxx>
                                </FormGroup>
                                <FormGroup row>
                                    <Label
                                        for="weekdayAvailabilityHorizontal"
                                        sm={2}
                                    >
                                        <IntlMessages id="forms.weekdayAvailability" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <CustomInput
                                            type="checkbox"
                                            id="weekdayAvailabilityCheckbox"
                                            label="Check for Weekday Availability"
                                        />
                                    </Colxx>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="languagesHorizontal" sm={2}>
                                        <IntlMessages id="forms.language" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <Input
                                            value={state.language || ''}
                                            type="text"
                                            name="language"
                                            id="emailHorizontal"
                                            placeholder={
                                                messages['forms.language']
                                            }
                                            onChange={handleChange}
                                        />
                                    </Colxx>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="genreHorizontal" sm={2}>
                                        <IntlMessages id="forms.genre" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <Input
                                            value={state.genre || ''}
                                            type="text"
                                            name="genre"
                                            id="genreHorizontal"
                                            placeholder={
                                                messages['forms.genre']
                                            }
                                            onChange={handleChange}
                                        />
                                    </Colxx>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="verticalHorizontal" sm={2}>
                                        <IntlMessages id="forms.vertical" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <Input
                                            value={state.vertical || ''}
                                            type="text"
                                            name="vertical"
                                            id="verticalHorizontal"
                                            placeholder={
                                                messages['forms.vertical']
                                            }
                                            onChange={handleChange}
                                        />
                                    </Colxx>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="passwordHorizontal" sm={2}>
                                        <IntlMessages id="forms.change-password" />
                                    </Label>
                                    <Colxx sm={10}>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="passwordHorizontal"
                                            placeholder={
                                                messages[
                                                    'forms.change-password'
                                                ]
                                            }
                                            onChange={handleChange}
                                        />
                                    </Colxx>
                                </FormGroup>
                                <Button color="primary">
                                    <IntlMessages id="forms.submit" />
                                </Button>
                                <Button
                                    color="danger"
                                    onClick={handleUserDelete}
                                >
                                    <IntlMessages id="forms.deleteUser" />
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        </Fragment>
    )
}

const mapStateToProps = ({ authUser }) => {
    const { userDetails } = authUser
    return { userDetails }
}

export default injectIntl(
    connect(
        mapStateToProps,
        { getUserDetails, deleteUser }
    )(ProfilePages)
)
