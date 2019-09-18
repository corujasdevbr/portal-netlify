import React, { Component } from "react";
import { Card, CardBody, CardTitle, Row } from "reactstrap";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";

export default class TonalitySwitchFormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchCheckedPrimary: false,
      switchCheckedPrimaryInverse: true,
      switchCheckedSecondary: true,
      switchCheckedSecondaryInverse: false
    };
  }
  render() {
    return (
      
          <Row className="mb-4">
            <Colxx xxs="6">
              <label>
                <IntlMessages id="forms.tonality-switch-3" />
              </label>
              <Switch
                className="custom-switch custom-switch-primary"
                checked={this.state.switchCheckedPrimary}
                onChange={switchCheckedPrimary => {
                  this.setState({ switchCheckedPrimary });
                }}
              />
            </Colxx>

           
          </Row>

    );
  }
}
