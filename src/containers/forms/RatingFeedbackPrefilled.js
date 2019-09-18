import React, { Component } from "react";
import { Row,CardTitle } from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import Rating from "../../components/common/Rating"

export default class RatingFeedbackPrefilled extends Component {
  render() {
    return (
      
      <Row>
        <Colxx xxs="12" sm="6">
        <br/>
                <CardTitle>
                  <b><IntlMessages id="form-components.feedback" /></b>
                  <Rating total={5} rating={5} interactive={false} />
                </CardTitle>
            
         
          
        </Colxx>
        
      </Row>
    );
  }
}
