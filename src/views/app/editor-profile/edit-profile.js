import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  CustomInput,
  Button,
  FormText,
  Form
} from "reactstrap";
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

import RightPanelDataForPayment from '../../../containers/dashboards/RightPanelDataForPayment';

import SortableStaticticsRow from '../../../containers/dashboards/SortableStaticticsRow';

import {
  ReactTableAdvancedCardForPayment
} from "../../../containers/ui/ReactTableForPayment";
import DropzoneForProfilePhoto from "../../../containers/forms/DropzoneForProfilePhoto";

class EditorProfilePages extends Component {
  render() {
    const { messages } = this.props.intl;
      return (
          <Fragment>
          <Row>
            <Colxx xxs="12">
              <Breadcrumb heading="menu.edit-profile-page" match={this.props.match} />
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              {/* <CardTitle>
                <IntlMessages id="forms.profile" />
              </CardTitle> */}
              <Form>
              <FormGroup row>
                  <Label for="projectNameorizontal" sm={2}>
                    <IntlMessages id="forms.name" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="name"
                      name="name"
                      id="nameHorizontal"
                      placeholder={messages["forms.name"]}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="typeHorizontal" sm={2}>
                    <IntlMessages id="forms.phone" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="phone"
                      name="phone"
                      id="phoneHorizontal"
                      placeholder={messages["forms.phone"]}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="emailHorizontal" sm={2}>
                    <IntlMessages id="forms.email" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="text"
                      name="email"
                      id="emailHorizontal"
                      placeholder={messages["forms.email"]}
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
                      placeholder={messages["forms.change-password"]}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="terminateHorizontal" sm={2}>
                    <IntlMessages id="forms.terminate-association" />
                  </Label>
                  <Colxx sm={10}>
                  <CustomInput
                      type="checkbox"
                      id="terminateCheckbox"
                      label="Check for terminating Association"
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="terminateHorizontal" sm={2}>
                    <IntlMessages id="forms.upload-photo" />
                  </Label>
                  <Colxx sm={10}>
                  <DropzoneForProfilePhoto/>
                  </Colxx>
                </FormGroup>
                {/* <FormGroup row>
                  <Label sm={2} className="pt-0">
                    <IntlMessages id="forms.gender" />
                  </Label>
                  <Colxx sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="gender" />
                        <IntlMessages id="forms.male" />
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="gender" />
                        <IntlMessages id="forms.female" />
                      </Label>
                    </FormGroup>
                    
                  </Colxx>
                </FormGroup> */}


                <Button color="primary">
                  <IntlMessages id="forms.submit" />
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
        </Fragment>
      )
  }
}
export default injectIntl(EditorProfilePages);
