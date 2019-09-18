import React from "react";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import IntlMessages from "../../helpers/IntlMessages";
import data from "../../data/payments";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Row,
  Input,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import RatingFeedback from "../../containers/forms/RatingFeedback";
export default function RightPanelDataForPaymentEditor(props) {
  return (
    
    <Card>
      <div className="position-absolute card-top-buttons">
        <button className="btn btn-header-light icon-button">
          <i className="simple-icon-refresh" />
        </button>
      </div>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.recent-assignments" />
        </CardTitle>
        <div className="scroll dashboard-list-with-thumbs">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            
            
           
            {/* {data.slice(0, 6).map((order, index) => {
              return (
                <div key={index} className="d-flex flex-row mb-3">
                  <NavLink
                    to="/app/pages/details"
                    className="d-block position-relative"
                  >
                      <img
                        src={order.img}
                        alt={order.title}
                        className="list-thumbnail border-0"
                      />
                      <Badge
                        key={index}
                        className="position-absolute badge-top-right"
                        color={order.statusColor}
                        pill
                      >
                        
                        
                      </Badge>
                  </NavLink>

                  <div className="pl-3 pt-2 pr-2 pb-2">
                    <NavLink to="/app/pages/details">
                      <p className="list-item-heading">{order.title}</p>
                      <div className="pr-4">
                        <p className="text-muted mb-1 text-small">
                          {order.description}
                        </p>
                      </div>
                      <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                        {order.createDate}
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })} */}
            <div className="pl-3 pt-2 pr-2 pb-2">
            
                      {"Code"}<p className="list-item-heading">{data[0].code}</p>
                      {"Name of Project"}<p className="list-item-heading">{data[0].nameOfProject}</p>
                      {"Project Brief"}<p className="list-item-heading">{data[0].projectBrief}</p>
                      <br/>
                      <CardTitle>
                      <b><IntlMessages id="dashboards.payment-status" /></b>
                    </CardTitle>
                      
                      <Button color="info" className="mb-2">
                      <IntlMessages id="button.paid" />
                    </Button>{" "}

                    <Button color="danger" className="mb-2">
                      <IntlMessages id="button.unpaid" />
                    </Button>{" "}

                    <RatingFeedback/> 
                    
                    <Input
                        type="text"
                        name="feedbackComments"
                        id="feedbackComments"
                        placeholder='Feedback Comments'
                      />
                        <Button color="info" className="mb-2 mt-2">
                      <IntlMessages id="button.submit" />
                    </Button>{" "}     
              </div>
               
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
}
