import React, { Component, useState, useEffect } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ReactTable from 'react-table'
import treeTableHOC from 'react-table/lib/hoc/treeTable'
import selectTableHOC from 'react-table/lib/hoc/selectTable'

import classnames from 'classnames'
import IntlMessages from '../../helpers/IntlMessages'
import DataTablePagination from '../../components/DatatablePagination'

import { API } from 'aws-amplify'

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
        Cell: props => <p className="text-muted">{props.value}</p>,
    },
]

export const ReactTableWithPaginationCard = props => {
    const [data, setData] = useState([])
    useEffect(() => {
        const id = localStorage.getItem('userId')

        async function fetchData() {
            try {
                let items = await API.get('portal-api', `/projects/${id}`, {
                    queryStringParameters: {
                        ur: 2,
                        lr: 2,
                    },
                })
                setData(items['Responses']['item-table'])
            } catch (error) {
                console.log({ error: error.response })
            }
        }

        fetchData()
    }, [])
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
export const ReactTableWithScrollableCard = props => {
    const [data, setData] = useState([])
    useEffect(() => {
        const id = localStorage.getItem('userId')

        async function fetchData() {
            try {
                let items = await API.get('portal-api', `/projects/${id}`, {
                    queryStringParameters: {
                        lr: 1,
                        ur: 1,
                    },
                })
                setData(items['Responses']['item-table'])
            } catch (error) {
                console.log({ error: error.response })
            }
        }

        fetchData()
    }, [])
    return (
        <Card className="mb-4">
            <CardBody>
                <CardTitle>
                    <IntlMessages id="table.react-scrollable" />
                </CardTitle>
                <ReactTable
                    data={data}
                    TbodyComponent={CustomTbodyComponent}
                    columns={dataTableColumns}
                    defaultPageSize={20}
                    showPageJump={false}
                    showPageSizeOptions={false}
                    showPagination={false}
                    className={'react-table-fixed-height'}
                />
            </CardBody>
        </Card>
    )
}
export const ReactTableAdvancedCard = props => {
    const [data, setData] = useState([])
    useEffect(() => {
        const id = localStorage.getItem('userId')

        async function fetchData() {
            try {
                let items = await API.get('portal-api', `/projects/${id}`, {
                    queryStringParameters: {
                        lr: 2,
                        ur: 2,
                    },
                })
                setData(items['Responses']['item-table'])
            } catch (error) {
                console.log({ error: error.response })
            }
        }

        fetchData()
    }, [])
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
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                // console.log('A Td Element was clicked!')
                                // console.log('it produced this event:', e)
                                // console.log('It was in this column:', column)
                                // console.log('It was in this row:', rowInfo)
                                console.log(rowInfo.row)
                                //this.setState({rowData : rowInfo.original})
                                //console.log('It was in this table instance:', instance)

                                // IMPORTANT! React-Table uses onClick internally to trigger
                                // events like expanding SubComponents and pivots.
                                // By default a custom 'onClick' handler will override this functionality.
                                // If you want to fire the original onClick handler, call the
                                // 'handleOriginal' function.
                                if (handleOriginal) {
                                    handleOriginal()
                                }
                            },
                        }
                    }}
                />
            </CardBody>
        </Card>
    )
}
