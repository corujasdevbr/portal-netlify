import React from 'react'
import { NavLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import IntlMessages from '../../helpers/IntlMessages'
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
export default function RightPanelDataForProjectEditor(props) {
    const data = props.rightPanelProject
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
                        {data.length === 0 ? (
                            <div className="pl-3 pt-2 pr-2 pb-2">
                                {'Select a project'}
                            </div>
                        ) : (
                            <div className="pl-3 pt-2 pr-2 pb-2">
                                {'Code'}
                                <p className="list-item-heading">
                                    {data[0].code}
                                </p>
                                {'Name of Project'}
                                <p className="list-item-heading">
                                    {data[0].nameOfProject}
                                </p>
                                {'Project Brief'}
                                <p className="list-item-heading">
                                    {data[0].projetBrief}
                                </p>
                            </div>
                        )}
                        <Button color="info" className="mb-2">
                            <IntlMessages id="button.download" />
                        </Button>{' '}
                        <Button color="info" className="mb-2">
                            <IntlMessages id="button.rework" />
                        </Button>{' '}
                        <Button color="info" className="mb-2">
                            <IntlMessages id="button.upload" />
                        </Button>{' '}
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    )
}
