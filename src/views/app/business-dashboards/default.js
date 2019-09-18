import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import RightPanelDataBusiness from '../../../containers/dashboards/RightPanelDataBusiness';

import {
  ReactTableAdvancedCard
} from "../../../containers/ui/ReactTableCards";
import {
  ReactTableAdvancedCardForDashboardBusiness
} from "../../../containers/ui/ReactTableCardsForDashboardBusiness";

class BusinessDefaultDashboard extends Component {
  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.dashboards" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row className="mb-5">
         
        <Colxx lg="12" xl="8" className="mb-4">
           <ReactTableAdvancedCardForDashboardBusiness />
           
         </Colxx>
         <Colxx lg="12" xl="4" className="mb-4">
            <RightPanelDataBusiness listData={this.props.rowInfo}/>
          </Colxx>
       </Row>
       
        
      </Fragment>
    );
  }
}
export default injectIntl(BusinessDefaultDashboard);
