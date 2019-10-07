import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ReactTable from 'react-table'
import treeTableHOC from 'react-table/lib/hoc/treeTable'
import selectTableHOC from 'react-table/lib/hoc/selectTable'

import classnames from 'classnames'
import IntlMessages from '../../helpers/IntlMessages'
import DataTablePagination from '../../components/DatatablePagination'

import { connect } from 'react-redux'
import { updateTopRightPanelProjectMyProjects } from '../../redux/actions'

import { API } from 'aws-amplify'

const CustomTbodyComponent = props => (
    <div {...props} className={classnames('rt-tbody', props.className || [])}>
        <PerfectScrollbar options={{ suppressScrollX: true }}>
            {props.children}
        </PerfectScrollbar>
    </div>
)
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
        Header: 'Project Title',
        accessor: 'projectTitle',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Word Count',
        accessor: 'wordCount',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },

    {
        Header: 'Vertical',
        accessor: 'vertical',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Genre',
        accessor: 'genre',
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
    {
        Header: 'Deadline',
        accessor: 'deadline',
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

const ReactTableAdvancedCardForProjectConnected = props => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (
            !(
                Object.entries(props.userDetails).length === 0 &&
                props.userDetails.constructor === Object
            )
        ) {
            organiseHistory(props.userDetails)
        }
    }, [props.userDetails])

    const organiseHistory = ({ projectHistory }) => {
        const projectIds = projectHistory ? Object.keys(projectHistory) : {}
        const projects = []
        projectIds.forEach(id => {
            projects.push({
                itemId: id,
                role: 'project',
            })
        })
        API.post('portal-api', '/items', {
            body: { keys: projects },
        })
            .then(response => {
                setData(response['Responses']['item-table'])
            })
            .catch(error => {
                console.log(error.response)
            })
    }
    // const data = props.projects
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
                                props.updateTopRightPanelProjectMyProjects(
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

const mapStateToProps = ({ projects, authUser }) => {
    const { topRightPanelProject } = projects
    const { userDetails } = authUser
    return {
        topRightPanelProject,
        userDetails,
    }
}

export const ReactTableAdvancedCardForProject = connect(
    mapStateToProps,
    {
        updateTopRightPanelProjectMyProjects,
    }
)(ReactTableAdvancedCardForProjectConnected)
