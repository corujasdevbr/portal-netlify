import React, { Component, useState, useEffect } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ReactTable from 'react-table'
import treeTableHOC from 'react-table/lib/hoc/treeTable'
import selectTableHOC from 'react-table/lib/hoc/selectTable'

import classnames from 'classnames'
import IntlMessages from '../../helpers/IntlMessages'
import DataTablePagination from '../../components/DatatablePagination'

import { connect } from 'react-redux'
import { updateBottomRightPanelProject } from '../../redux/actions'

const CustomTbodyComponent = props => (
    <div {...props} className={classnames('rt-tbody', props.className || [])}>
        <PerfectScrollbar options={{ suppressScrollX: true }}>
            {props.children}
        </PerfectScrollbar>
    </div>
)
class ReactTableCards extends Component {
    constructor(props) {
        super(props)
        console.log(this.state)
    }
}
const TreeTable = treeTableHOC(ReactTable)
const SelectTreeTable = selectTableHOC(treeTableHOC(ReactTable))
let selectAll = false
const handleSelectAll = row => {
    selectAll = true
    console.log(`select all was clicked!`)
}

const dataTableColumns = [
    {
        Header: 'Project Code',
        accessor: 'projectCode',
        Cell: props => <p className="list-item-heading">{props.value}</p>,
    },
    {
        Header: 'Project Name',
        accessor: 'projectTitle',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Word Count',
        accessor: 'wordCount',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Deadline',
        accessor: 'deadline',
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
            return (
                <p className="text-muted">
                    {date.toLocaleString('en-GB', options)}
                </p>
            )
        },
    },
    {
        Header: 'Genre',
        accessor: 'genre',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Vertical',
        accessor: 'vertical',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Language',
        accessor: 'language',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: props => {
            let status = ''
            switch (props.value) {
                case 0:
                    status = 'Not alloted'
                    break
                case 1:
                    status = 'Alloted to writer'
                    break
                case 2:
                    status = 'Accepted'
                    break
                case 3:
                    status = 'To be sent to editor'
                    break
                case 4:
                    status = 'Sent to editor'
                    break
                case 5:
                    status = 'Submitted by editor'
                    break
                case 6:
                    status = 'Sent to client'
                    break
                case 7:
                    status = 'Rework'
                    break
                default:
                    status = ';)'
            }
            return <p className="text-muted">{status}</p>
        },
    },
]

export const ReactTableWithPaginationCard = props => {
    const data = props.projects
    return (
        <Card className="mb-4">
            <CardBody>
                <CardTitle>
                    <IntlMessages id="table.react-pagination" />
                </CardTitle>
                <ReactTable
                    data={data}
                    columns={dataTableColumns}
                    defaultPageSize={5}
                    showPageJump={false}
                    showPageSizeOptions={false}
                    PaginationComponent={DataTablePagination}
                    className={'react-table-fixed-height'}
                />
            </CardBody>
        </Card>
    )
}

const ReactTableAdvancedCardConnected = props => {
    const data = props.projects
    return (
        <Card className="mb-4">
            <CardBody>
                <CardTitle>
                    {/* <IntlMessages id="table.react-advanced" /> */}
                </CardTitle>
                <ReactTable
                    keyField="itemId"
                    data={data}
                    columns={dataTableColumns}
                    defaultPageSize={5}
                    filterable={true}
                    showPageJump={true}
                    PaginationComponent={DataTablePagination}
                    showPageSizeOptions={true}
                    selectAll={selectAll}
                    toggleAll={handleSelectAll}
                    getPaginationProps={() => {
                        return { projects: props.projects }
                    }}
                    getTrProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: () => {
                                props.updateBottomRightPanelProject(
                                    rowInfo.original
                                )
                            },
                        }
                    }}
                />
            </CardBody>
        </Card>
    )
}

const mapStateToProps = ({ projects }) => {
    const { bottomRightPanelProject } = projects
    return {
        bottomRightPanelProject,
    }
}

export const ReactTableAdvancedCard = connect(
    mapStateToProps,
    {
        updateBottomRightPanelProject,
    }
)(ReactTableAdvancedCardConnected)
