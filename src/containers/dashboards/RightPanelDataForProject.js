import React, { useState } from 'react'
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

import { API, Storage } from 'aws-amplify'
export default function RightPanelDataForProject(props) {
    const [uploadFile, setUploadFile] = useState(null)
    const data = props.rightPanelProject

    const onFileUpload = event => {
        setUploadFile(event.target.files[0])
    }

    const approveProject = async () => {
        let operation = ''
        if (data[0].status === 1) {
            operation = 'acceptAllotedProject'
        } else if (data[0].status === 2) {
            operation = 'submitProject'
        }
        const userId = localStorage.getItem('userId')
        let targetStatus = 0
        if (operation === 'acceptAllotedProject') {
            targetStatus = 2
        } else if (operation === 'submitProject') {
            targetStatus = 3
        }

        try {
            const uploadFileName = `${Date.now()}`
            const stored = await Storage.vault.put(uploadFileName, uploadFile, {
                contentType: uploadFile.type,
            })
            const fileUrl = await Storage.get(stored.key, {
                level: 'private',
            })
            await API.put('portal-api', `/users/${userId}/projects/fileUrl`, {
                body: {
                    projectId: data[0].itemId,
                    url: fileUrl,
                },
            })
            await API.put('portal-api', `/users/${userId}/update`, {
                body: {
                    role: localStorage.getItem('userGroup'),
                    status: parseInt(targetStatus),
                    projectId: data[0].itemId,
                },
            })
            props.updatePanelProject([])
            props.getActiveProjects()
        } catch (error) {
            console.log(error.response)
            alert('Operation failed. Please try again.')
        }
    }
    const rejectProject = async () => {
        const userId = localStorage.getItem('userId')
        let targetStatus = 0
        if (data[0].status === 1) {
            targetStatus = 0
        }
        API.put('portal-api', `/users/${userId}/update`, {
            body: {
                role: localStorage.getItem('userGroup'),
                status: parseInt(targetStatus),
                projectId: data[0].itemId,
            },
        })
            .then(response => {
                props.updatePanelProject([])
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
                                    {data[0].projectTitle}
                                </p>
                                {'Project Brief'}
                                <p className="list-item-heading">
                                    {data[0].projetBrief}
                                </p>
                            </div>
                        )}
                        <input
                            type="file"
                            name="file"
                            onChange={onFileUpload}
                        />
                        {props.leftButtonText === 'none' ? null : (
                            <Button
                                color="info"
                                className="mb-2"
                                onClick={approveProject}
                            >
                                <IntlMessages
                                    id={`button.${props.leftButtonText}`}
                                />
                            </Button>
                        )}
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    )
}
