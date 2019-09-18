import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, CardTitle, Table } from "reactstrap";
import IntlMessages from "../../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import {
  ReactTableWithPaginationCard,
  ReactTableWithScrollableCard,
  ReactTableAdvancedCard
} from "../../../../containers/ui/ReactTableCards";

export default class TablesUi extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="table.react-advanced" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row className="mb-5">
          

         
          <Colxx xxs="12">
            <ReactTableAdvancedCard />
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
