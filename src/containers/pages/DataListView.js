import React from "react";
import { Card, CustomInput, Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { ContextMenuTrigger } from "react-contextmenu";
import { Colxx } from "../../components/common/CustomBootstrap";

const DataListView = ({ data, isSelect, collect, onCheckItem }) => {
  return (
    <Colxx xxs="12" className="mb-3">
      <ContextMenuTrigger id="menu_id" data={data.id} collect={collect}>
        <Card
          onClick={event => onCheckItem(event, data.id)}
          className={classnames("d-flex flex-row", {
            active: isSelect
          })}
        >
           
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${data.id}`} className="w-25 w-sm-100">
             <p className="list-item-heading mb-1 truncate">
                  {data.companyName}
                </p>
              </NavLink>
              <p className="mb-1   w-15 w-sm-100">
                {data.topicName}
              </p>
              <p className="mb-1   w-15 w-sm-100">
                {data.wordsCount}
              </p>
              <p className="mb-1   w-15 w-sm-100">
                {data.deadline}
              </p>
              <p className="mb-1   w-15 w-sm-100">
                {data.genre}
              </p>
              <p className="mb-1   w-15 w-sm-100">
                {data.vertical}
              </p>
              <p className="mb-1   w-15 w-sm-100">
                {data.dateTime}
              </p>
              <div className="w-15 w-sm-100">
                <Badge color={data.statusColor} pill>
                  {data.status}
                </Badge>
              </div>
            </div>
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${data.id}`}
                checked={isSelect}
                onChange={() => {}}
                label=""
              />
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);
