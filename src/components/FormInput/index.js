import * as React from 'react';

import { Input } from 'reactstrap';
import {connect} from 'react-redux';

import {updateForm} from '../../store/actions'

class FormField extends React.Component{

    handleChange=(event)=>{
      
      event.preventDefault();
      
      let fields = this.props.fieldsAsProps;
      let name = event.target.name; // Field name
      let value = event.target.value; // Field value

      fields[name] = value;
      this.props.updateForm(fields);
    }
    
    render(){
        const fields = this.props.data;
        return(
          <Input name={ fields['name'] } type={fields['type']} placeholder={fields['placeholder']} onChange={this.handleChange} disabled={this.props.formDisable} />
        )
    }
}

const mapToStateToProps = (state) => {
    return {
        fieldsAsProps: state.fields,
        formDisable: state.formDisable
    }
}

const mapDispatchToProps = dispatch => {
    return {
      updateForm: (value) => dispatch(updateForm(value))
    }
}

export default connect(
  mapToStateToProps, 
  mapDispatchToProps
)(FormField);