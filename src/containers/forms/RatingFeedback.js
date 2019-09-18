import React, { Component } from "react";
import { Row,CardTitle } from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import Rating from "../../components/common/Rating"

export default class RatingFeedback extends Component {
  render() {
    return (
      
      <Row>
        <Colxx xxs="12" sm="6">
        <br/>
                <CardTitle>
                  <b><IntlMessages id="form-components.feedback" /></b>
                  <Rating total={5} rating={0} onRate={rating => {}} />
                </CardTitle>
            
         
          
        </Colxx>
        
      </Row>
    );
  }
}
