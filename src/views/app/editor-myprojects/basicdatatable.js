import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Card, CardBody, CardTitle } from "reactstrap";
import DataTable from 'react-data-table-component';
import { Button,Checkbox, FontIcon } from 'react-md';
import { memoize } from 'react-data-table-component';
import differenceBy from 'lodash/differenceBy';
 
const data = [{ id: 1, title: 'Conan the Barbarian',director:'Dir 1', year: '1982' },
{ id: 2, title: 'Terminator',director:'Dir 2', year: '1983' },
{ id: 3, title: 'I Love You Sucy',director:'Dir 3', year: '1970' },
{ id: 4, title: 'Terminator 2',director:'Dir 4', year: '1990' }];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
  {
    cell: () => (
      <Button raised primary>
        Action
      </Button>
    ),
    button: true,
  },
];
const contextActions = memoize(deleteHandler => (
    <Button key="delete" onClick={deleteHandler} style={{ color: 'red' }} icon>
      delete
    </Button>
  ));
const actions = (
    <Button key="add" flat secondary iconChildren="add">
      Add
    </Button>
  );

const state = { toggledClearRows: false }

const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };

  const handleClearRows = () => {
    this.setState({ toggledClearRows: !this.state.toggledClearRows})
  }

  const handleRowClicked = row => {
    console.log(`${row.name} was clicked!`);
  };

  const deleteAll = () => {
    const { selectedRows } = this.state;
    const rows = selectedRows.map(r => r.name);

    if (window.confirm(`Are you sure you want to delete:\r ${rows}?`)) {
      this.setState(state => ({
        toggleCleared: !state.toggleCleared,
        data: differenceBy(state.data, state.selectedRows, 'name'),
      }));
    }
  };

  const deleteOne = row => {
    if (window.confirm(`Are you sure you want to delete:\r ${row.name}?`)) {
      const { data } = this.state;
      const index = data.findIndex(r => r === row);

      this.setState(state => ({
        toggleCleared: !state.toggleCleared,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
      }));
    }
  };

export default class BasicDataTable extends Component {
  render() {
    return (
        <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.myprojects-page" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
        <Card className="mb-4">
      <CardBody>
        <CardTitle>
          {/* <IntlMessages id="table.react-advanced" /> */}
        </CardTitle>
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
        selectableRows // add for checkbox selection
        onRowSelected={handleChange}
        clearSelectedRows={state.toggledClearRows}
        onRowClicked={this.handleRowClicked}
        pagination
      />
      </CardBody>
      </Card>
      </Colxx>
      </Row>
      </Fragment>
    )
  }
}