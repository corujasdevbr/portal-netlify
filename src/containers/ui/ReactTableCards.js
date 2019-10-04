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
        Cell: props => <p className="text-muted">{props.value}</p>,
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
            console.log(props.value)
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

// export const ReactTableWithScrollableCard = props => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         const id = localStorage.getItem('userId')

//         async function fetchData() {
//             try {
//                 let items = await API.get('portal-api', `/projects/${id}`, {
//                     queryStringParameters: {
//                         lr: 1,
//                         ur: 1,
//                     },
//                 })
//                 setData(items['Responses']['item-table'])
//             } catch (error) {
//                 console.log({ error: error.response })
//             }
//         }

//         fetchData()
//     }, [])
//     return (
//         <Card className="mb-4">
//             <CardBody>
//                 <CardTitle>
//                     <IntlMessages id="table.react-scrollable" />
//                 </CardTitle>
//                 <ReactTable
//                     data={data}
//                     TbodyComponent={CustomTbodyComponent}
//                     columns={dataTableColumns}
//                     defaultPageSize={20}
//                     showPageJump={false}
//                     showPageSizeOptions={false}
//                     showPagination={false}
//                     className={'react-table-fixed-height'}
//                 />
//             </CardBody>
//         </Card>
//     )
// }
