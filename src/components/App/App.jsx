import * as React from 'react';
import { connect } from 'react-redux';

import FormInterface from '../FormInterface';
import Loader from '../Loader';
import { Container, Form, Button } from 'reactstrap';
import { submitForm, submitFormSuccess } from '../../store/actions'

import { submitTimeout } from '../../submitMock';

import './custom.scss';
import './App.css';

class App extends React.Component {

  // creating form ref to reset inputs values
  formRef = React.createRef();
  
  // Submit form
  submitForm(e) {
    
    e.preventDefault();

    this.props.submitForm(true);
    
    // Setting the timeout for 5000 ms
    submitTimeout(5000, 'Submit Form')
    .then((value) => {
      this.props.submitFormSuccess(false);
      this.formRef.current.reset()
    });
    
  }

  render() {
    return (
      <Container className="App">

        <Loader open={ this.props.formDisable } />

        <h2>Form</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) } innerRef={ this.formRef }>
          {this.props.form.map((input, index) => (
            <FormInterface 
              key={index}
              inputs={input}
            />
          ))}
          <Button className="submitBtn" disabled={ this.props.formDisable }>Submit</Button>
        </Form>
        
      </Container>
    );
  }
}

const mapToStateToProps = state => {
    return {
        form: state.form,
        formDisable: state.formDisable
    }
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (value) => dispatch(submitForm(value)),
        submitFormSuccess: (value) => dispatch(submitFormSuccess(value)),
    };
};

export default connect(
    mapToStateToProps,
    mapDispatchToProps
)(App);
