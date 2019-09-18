import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

import RightPanelDataForPayment from '../../../containers/dashboards/RightPanelDataForPayment';

import SortableStaticticsRow from '../../../containers/dashboards/SortableStaticticsRow';

import {
  ReactTableAdvancedCardForPayment
} from "../../../containers/ui/ReactTableForPayment";


class PaymentListPages extends Component {
  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.mypayments" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row className="mb-5">
         
        <Colxx lg="12" xl="8" className="mb-4">
           <ReactTableAdvancedCardForPayment />
           
         </Colxx>
         <Colxx lg="12" xl="4" className="mb-4">
            <RightPanelDataForPayment listData={this.props.rowInfo}/>
          </Colxx>
       </Row>
        {/* <Row>
          <Colxx lg="12" xl="6">
            <IconCardsCarousel />
            <Row>
              <Colxx md="12" className="mb-4">
                <SalesChartCard />
              </Colxx>
            </Row>
          </Colxx>
          <Colxx lg="12" xl="6" className="mb-4">
            <RecentOrders />
          </Colxx>
        </Row> */}
       
        
       
        {/* <SortableStaticticsRow messages={messages} /> */}
        
      </Fragment>
    );
  }
}
export default injectIntl(PaymentListPages);
