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
import TonalitySwitchTopical from '../../../containers/forms/TonlitySwitchTopical';
import TonalitySwitchConsice from '../../../containers/forms/TonlitySwitchConsice';
import TonlitySwitchFormal from '../../../containers/forms/TonlitySwitchFormal';
import TonlitySwitchNiche from '../../../containers/forms/TonlitySwitchNiche';
import TonalitySwitchFormal from '../../../containers/forms/TonlitySwitchFormal';
import TonalitySwitchNiche from '../../../containers/forms/TonlitySwitchNiche';
import DropzoneForProfilePhoto from "../../../containers/forms/DropzoneForProfilePhoto";


class BusinessProfilePages extends Component {
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
                    <IntlMessages id="forms.company-name" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="text"
                      name="companyName"
                      id="nameHorizontal"
                      placeholder={messages["forms.company-name"]}
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
                  <Label for="contactNameorizontal" sm={2}>
                    <IntlMessages id="forms.contact-name" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="text"
                      name="contactName"
                      id="nameHorizontal"
                      placeholder={messages["forms.contact-name"]}
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
                <Label for="passwordHorizontal" sm={2}>
                <b><IntlMessages id="forms.industry-and-audience" /></b>
                </Label>
                </FormGroup>

                <FormGroup row>
                  <Label for="websiteLinkorizontal" sm={2}>
                    <IntlMessages id="forms.website-link" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="text"
                      name="websiteLink"
                      id="websiteLinkHorizontal"
                      placeholder={messages["forms.website-link"]}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="primaryIndustryHorizontal" sm={2}>
                    <IntlMessages id="forms.primary-industry" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="text"
                      name="primaryIndustry"
                      id="primaryIndustryHorizontal"
                      placeholder={messages["forms.primary-industry"]}
                    />
                  </Colxx>
                </FormGroup>
                
                <FormGroup row>
                  <Label for="secondaryIndustryHorizontal" sm={2}>
                    <IntlMessages id="forms.secondary-industry" />
                  </Label>
                  <Colxx sm={10}>
                    <Input
                      type="text"
                      name="secondaryIndustry"
                      id="secondaryIndustryHorizontal"
                      placeholder={messages["forms.secondary-industry"]}
                    />
                  </Colxx>
                </FormGroup>

                <FormGroup row>
                <Label for="passwordHorizontal" sm={2}>
                <b><IntlMessages id="forms.tonality" /></b>
                </Label>
                </FormGroup>

                <FormGroup row>
                  <Label for="secondaryIndustryHorizontal" sm={2}>
                    <IntlMessages id="forms.topical-promotional" />
                  </Label>
                  <Colxx sm={10}>
                    <TonalitySwitchTopical/>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="secondaryIndustryHorizontal" sm={2}>
                    <IntlMessages id="forms.consice-explanatory" />
                  </Label>
                  <Colxx sm={10}>
                    <TonalitySwitchConsice/>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="secondaryIndustryHorizontal" sm={2}>
                    <IntlMessages id="forms.formal-casual" />
                  </Label>
                  <Colxx sm={10}>
                    <TonalitySwitchFormal/>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Label for="secondaryIndustryHorizontal" sm={2}>
                    <IntlMessages id="forms.niche-generic" />
                  </Label>
                  <Colxx sm={10}>
                    <TonalitySwitchNiche/>
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
export default injectIntl(BusinessProfilePages);
