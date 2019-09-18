import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
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
import { injectIntl} from 'react-intl';

class Project extends Component {
    render() {
      const { messages } = this.props.intl;
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.myprojects-page" match={this.props.match} />
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
                      <IntlMessages id="forms.project-name" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="projectName"
                        name="projectName"
                        id="projectNameHorizontal"
                        placeholder={messages["forms.project-name"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="typeHorizontal" sm={2}>
                      <IntlMessages id="forms.project-type" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="type"
                        name="type"
                        id="typeHorizontal"
                        placeholder={messages["forms.project-type"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="genreHorizontal" sm={2}>
                      <IntlMessages id="forms.genre" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="genre"
                        name="genre"
                        id="emailHorizontal"
                        placeholder={messages["forms.genre"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="genreHorizontal" sm={2}>
                      <IntlMessages id="forms.language" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="genre"
                        name="genre"
                        id="emailHorizontal"
                        placeholder={messages["forms.language"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="genreHorizontal" sm={2}>
                      <IntlMessages id="forms.topic" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="genre"
                        name="genre"
                        id="emailHorizontal"
                        placeholder={messages["forms.topic"]}
                      />
                    </Colxx>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Label for="passwordHorizontal" sm={2}>
                      <IntlMessages id="forms.article-details" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="text"
                        name="password"
                        id="passwordHorizontal"
                        placeholder={messages["forms.article-details"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="genreHorizontal" sm={2}>
                      <IntlMessages id="forms.words-per-articles" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="genre"
                        name="genre"
                        id="emailHorizontal"
                        placeholder={messages["forms.words-per-articles"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="phoneHorizontal" sm={2}>
                      <IntlMessages id="forms.no-of-articles" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="phone"
                        name="phone"
                        id="phoneHorizontal"
                        placeholder={messages["forms.no-of-articles"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="passwordHorizontal" sm={2}>
                      <IntlMessages id="forms.experience-level" />
                    </Label>
                    <Colxx sm={10}>
                      <Input
                        type="text"
                        name="password"
                        id="passwordHorizontal"
                        placeholder={messages["forms.experience-level"]}
                      />
                    </Colxx>
                  </FormGroup>
                  <Button color="primary">
                    <IntlMessages id="forms.submit" />
                  </Button>
                  
                  <Button color="primary">
                    <IntlMessages id="forms.add-article" />
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
export default injectIntl(Project)