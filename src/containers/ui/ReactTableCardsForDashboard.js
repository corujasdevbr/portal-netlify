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
import { updateTopRightPanelProject } from '../../redux/actions'

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

export const ReactTableAdvancedCardForDashboardConnected = props => {
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
                                props.updateTopRightPanelProject(
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
    const { topRightPanelProject } = projects
    return {
        topRightPanelProject,
    }
}

export const ReactTableAdvancedCardForDashboard = connect(
    mapStateToProps,
    {
        updateTopRightPanelProject,
    }
)(ReactTableAdvancedCardForDashboardConnected)
