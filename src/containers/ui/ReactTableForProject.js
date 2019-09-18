import React, { Component }  from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import treeTableHOC from "react-table/lib/hoc/treeTable";
import selectTableHOC from "react-table/lib/hoc/selectTable";

import classnames from "classnames";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";

import data from "../../data/project";

const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);  
// class ReactTableForProject extends Component {
// constructor(props) {
//   super(props);
//   console.log(this.state);
// }
// }
const TreeTable = treeTableHOC(ReactTable);
const SelectTreeTable = selectTableHOC(treeTableHOC(ReactTable));
let selectAll = false;
const handleSelectAll = row => {
  selectAll = true;
  console.log(`select all was clicked!`);
};

const dataTableColumns = [
  {
    Header: "Code",
    accessor: "code",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Name of Project",
    accessor: "nameOfProject",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Words Count",
    accessor: "wordsCount",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  
  {
    Header: "Vertical",
    accessor: "vertical",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Domain",
    accessor: "domain",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Client Name",
    accessor: "clientName",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Date of Allotment",
    accessor: "dateOfAllotment",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Date of Deadline",
    accessor: "deadline",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
];

export const ReactTableWithPaginationCard = props => {
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
          className={"react-table-fixed-height"}
        />
      </CardBody>
    </Card>
  );
};
export const ReactTableWithScrollableCard = props => {
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
          className={"react-table-fixed-height"}
        />
      </CardBody>
    </Card>
  );
};
export const ReactTableAdvancedCardForProject = props => {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          {/* <IntlMessages id="table.react-advanced" /> */}
        </CardTitle>
        <ReactTable keyField="id"
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
                console.log(rowInfo.row);
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
              }
            }
          }}
        />
      </CardBody>
    </Card>
  );
};
