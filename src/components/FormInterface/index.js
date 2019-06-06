import * as React from 'react';

import { Col, FormGroup, Label } from 'reactstrap';
import FormInput from '../FormInput';

export class FormInterface extends React.Component{

  render(){
      const data = { 
          name: this.props.inputs.name, 
          type: this.props.inputs.type, 
          placeholder: this.props.inputs.placeholder
      }
      return(
          <FormGroup row={true}>
            <Label for={ `${this.props.inputs.name}` } sm={2}>{ this.props.inputs.label }</Label>
            <Col sm={10}>
              <FormInput data={ data }/>
            </Col>
          </FormGroup>
      )
  }
}

export default FormInterface;