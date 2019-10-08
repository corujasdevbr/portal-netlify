import React, { useState, useEffect } from 'react'
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

import ReactTable from 'react-table'
import DataTablePagination from '../../components/DatatablePagination'

const dataTableColumns = [
    {
        Header: 'Overview',
        accessor: 'timestamp',
        Cell: props => {
            const options = {
                dateStyle: 'medium',
                timeZone: 'Asia/Kolkata',
                hour12: true,
                year: '2-digit',
                month: 'short',
                day: '2-digit',
            }
            let date = new Date(parseInt(props.value))
            let outputText = ''
            if (
                props.original.fromStatus == 1 &&
                props.original.toStatus == 2
            ) {
                outputText = `Accepted to work on ${date.toLocaleString(
                    'en-GB',
                    options
                )}`
            } else if (
                props.original.fromStatus == 2 &&
                props.original.toStatus == 3
            ) {
                outputText = `Submitted finished project on ${date.toLocaleString(
                    'en-GB',
                    options
                )}`
            }
            return <p className="text-muted">{outputText}</p>
        },
    },
]

const HistoryTable = props => {
    return (
        <ReactTable
            keyField="itemId"
            data={props.history}
            columns={dataTableColumns}
            defaultPageSize={5}
            showPageJump={true}
            PaginationComponent={DataTablePagination}
            showPageSizeOptions={true}
        />
    )
}

export default function RightPanelDataForProject(props) {
    const [data, setData] = useState({
        history: [],
        project: {},
    })

    useEffect(() => {
        if (
            !(
                Object.entries(props.rightPanelProject).length === 0 &&
                props.rightPanelProject.constructor === Object
            )
        ) {
            setData(props.rightPanelProject.project)
        }
    }, [props.rightPanelProject])

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
                            <>
                                <div className="pl-3 pt-2 pr-2 pb-2">
                                    {data.projectCode}
                                </div>
                                <HistoryTable
                                    history={
                                        props.rightPanelProject.history || []
                                    }
                                />
                            </>
                        )}
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    )
}
