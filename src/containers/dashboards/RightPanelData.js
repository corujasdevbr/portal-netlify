import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import IntlMessages from '../../helpers/IntlMessages'
import { API } from 'aws-amplify'

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
    const data = props.rightPanelProject

    const approveProject = () => {
        const userId = localStorage.getItem('userId')
        API.put('portal-api', `/users/${userId}/update`, {
            body: {
                role: localStorage.getItem('userGroup'),
                status: parseInt('2'),
                projectId: data[0].itemId,
            },
        })
            .then(response => {
                console.log('TCL: RightPanelData -> response', response)
                props.updateTopRightPanelProject([])
                props.getActiveProjects()
            })
            .catch(error => {
                console.log(error.response)
                alert('Operation failed. Please try again.')
            })
    }
    const rejectProject = async () => {
        const userId = localStorage.getItem('userId')
        API.put('portal-api', `/users/${userId}/update`, {
            body: {
                role: localStorage.getItem('userGroup'),
                status: parseInt('0'),
                projectId: data[0].itemId,
            },
        })
            .then(response => {
                console.log('TCL: RightPanelData -> response', response)
                props.updateTopRightPanelProject([])
            })
            .catch(error => {
                console.log(error.response)
                alert('Operation failed. Please try again.')
            })
    }
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
                        {/* check if object is empty */}
                        {data.length === 0 ? (
                            <div className="pl-3 pt-2 pr-2 pb-2">
                                {'Select a project'}
                            </div>
                        ) : (
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
                        )}
                        <Button
                            color="info"
                            className="mb-2"
                            onClick={approveProject}
                        >
                            <IntlMessages id="button.approve" />
                        </Button>{' '}
                        <Button
                            color="danger"
                            className="mb-2"
                            onClick={rejectProject}
                        >
                            <IntlMessages id="button.pass" />
                        </Button>{' '}
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    )
}
