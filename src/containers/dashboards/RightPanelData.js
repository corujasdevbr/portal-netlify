import React from 'react'
import { NavLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import IntlMessages from '../../helpers/IntlMessages'
import data from '../../data/products'
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
    Row,
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap'
export default function RightPanelData(props) {
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
                        options={{
                            suppressScrollX: true,
                            wheelPropagation: false,
                        }}
                    >
                        <div className="pl-3 pt-2 pr-2 pb-2">
                            {'Company Name'}
                            <p className="list-item-heading">
                                {data[0].companyName}
                            </p>
                            {'Topic Name'}
                            <p className="list-item-heading">
                                {data[0].topicName}
                            </p>
                            {'Project Brief'}{' '}
                            <p className="list-item-heading">
                                {data[0].projectBrief}
                            </p>
                        </div>
                        <Button color="info" className="mb-2">
                            <IntlMessages id="button.approve" />
                        </Button>{' '}
                        <Button color="danger" className="mb-2">
                            <IntlMessages id="button.pass" />
                        </Button>{' '}
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    )
}
