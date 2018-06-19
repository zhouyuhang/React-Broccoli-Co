import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl,Modal } from 'react-bootstrap';
import axios from 'axios';

import '../styles/Form.scss';

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name:'',
      nameErr:'',
      email:'',
      emailErr:'',
      confirmemail:'',
      confirmemailErr:'',
      requestErr:''
    };
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }

  validate() {
    let hasErr = false;
    const errors = {};

    if( this.state.name.length < 3 ) {
      hasErr = true;
      errors.nameErr = "Full name need to be at least 3 characters long.";
    }
    if( !this.state.email.includes("@")) {
      hasErr = true;
      errors.emailErr = "This is not a valid email address";
    }
    if ( !this.state.confirmemail || this.state.confirmemail !== this.state.email) {
      hasErr = true;
      errors.confirmemailErr = "The Confirmation Email must match your Email Address";
    }

    // Set focus
    if( this.state.name.length < 3 ) {
      document.getElementById('formHorizontalName').focus();
    }
    else if( !this.state.email.includes("@")) {
      document.getElementById('formHorizontalEmail').focus();
    }
    else if ( !this.state.confirmemail || this.state.confirmemail !== this.state.email) {
      document.getElementById('formHorizontalConfirmEmail').focus();
    }

    if(hasErr) {
      this.setState(errors);
    }
    return hasErr;
  }


  handleSubmit(event) {
    event.preventDefault();

    // console.log('The form will be submitted with the following data:');
    // console.log(this.state);
    //clean form errors
    this.setState({
      nameErr:'',
      emailErr:'',
      confirmemailErr:'',
      requestErr:''
    });

    // Check for errors
    const err = this.validate();
    // Connect to API
    if(!err){
      //clean form
      this.setState({
        name:'',
        nameErr:'',
        email:'',
        emailErr:'',
        confirmemail:'',
        confirmemailErr:'',
        requestErr:''
      });

      // Call API with Post
      axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',{
        name: this.state.name,
        email: this.state.email
        })
        .then((response) => {
          console.log(response);
          this.props.showModal1(false); // Hide Sign Up Form
          document.getElementById("request-success").click();
        })
        .catch((error) => {
          console.log(error);
          this.setState({requestErr: 'Request to the Server failed, please try again.'});
        });

    }

  }

  render() {

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <legend className="modal-title">Request an invite</legend>
        <hr className="modal-hr"/>
        <FormGroup controlId="formHorizontalName">
            <FormControl type="text" placeholder="Full Name"
            name="name"
            autoFocus
            value={this.state.name}
            onChange={this.handleChange}
            errortext={this.state.nameErr} />
            <span className="error-text">{this.state.nameErr}</span>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
            <FormControl type="email" placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            errortext={this.state.emailErr} />
            <span className="error-text">{this.state.emailErr}</span>
        </FormGroup>

        <FormGroup controlId="formHorizontalConfirmEmail">
            <FormControl type="email" placeholder="Confirm Email"
            name="confirmemail"
            value={this.state.confirmemail}
            onChange={this.handleChange}
            errortext={this.state.confirmemailErr} />
            <span className="error-text">{this.state.confirmemailErr}</span>
        </FormGroup>

        <FormGroup>
            <Button type="submit" bsStyle="success" bsSize="large" className="form-submit"
             block>
            Send</Button>
            <span className="error-text">{this.state.requestErr}</span>
        </FormGroup>
      </Form>
    );
  }
}

export default Form1;
