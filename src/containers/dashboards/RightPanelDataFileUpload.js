import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import IntlMessages from '../../helpers/IntlMessages'
import { API, Storage } from 'aws-amplify'

import { Button, Card, CardBody, CardTitle, InputGroup } from 'reactstrap'

export default function RightPanelDataFileUpload(props) {
    const [uploadFile, setUploadFile] = useState(null)
    const [inputGroupText, setInputGroupText] = useState('Choose file')
    const [data, setData] = useState({})

    useEffect(() => {
        setData(props.rightPanelProject)
    }, [props.rightPanelProject])

    const onFileUpload = event => {
        setUploadFile(event.target.files[0])
        setInputGroupText(event.target.files[0].name)
    }

    const approveProject = async () => {
        let operation = ''
        if (data.status === 1) {
            operation = 'acceptAllottedProject'
        } else if (data.status === 2) {
            operation = 'submitProject'
        }
        const userId = localStorage.getItem('userId')
        let targetStatus = 0
        if (operation === 'acceptAllottedProject') {
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
                    projectId: data.itemId,
                    url: fileUrl,
                },
            })
            await API.put('portal-api', `/users/${userId}/update`, {
                body: {
                    role: localStorage.getItem('userGroup'),
                    fromStatus: parseInt(data.status),
                    toStatus: parseInt(targetStatus),
                    projectId: data.itemId,
                },
            })
            if (operation === 'acceptAllottedProject') {
                props.updateTopRightPanelProject({})
            } else if (operation === 'submitProject') {
                props.updateBottomRightPanelProject({})
            }
            props.getActiveProjects()
            props.getAllottedProjects()
        } catch (error) {
            console.log(error.response)
            alert('Operation failed. Please try again.')
        }
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
                        {Object.entries(data).length === 0 &&
                        data.constructor === Object ? (
                            <div className="pl-3 pt-2 pr-2 pb-2">
                                {'Select a project'}
                            </div>
                        ) : (
                            <>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    <p className="font-weight-bold">
                                        Project Title
                                    </p>
                                    <p className="list-item-heading">
                                        {data.projectTitle}
                                    </p>
                                    <p className="font-weight-bold">
                                        Project Code
                                    </p>
                                    <p className="list-item-heading">
                                        {data.projectCode}
                                    </p>
                                    <p className="font-weight-bold">
                                        Project Brief
                                    </p>
                                    <p className="list-item-heading">
                                        {data.brief}
                                    </p>
                                </div>
                                <InputGroup className="mb-3">
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="file"
                                            name="file"
                                            onChange={onFileUpload}
                                        />
                                        <label className="custom-file-label">
                                            {inputGroupText}
                                        </label>
                                    </div>
                                </InputGroup>
                                {props.leftButtonText === 'none' ? null : (
                                    <Button
                                        color="primary"
                                        className="mb-2"
                                        onClick={approveProject}
                                    >
                                        <IntlMessages
                                            id={`button.${props.leftButtonText}`}
                                        />
                                    </Button>
                                )}
                            </>
                        )}
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    )
}
