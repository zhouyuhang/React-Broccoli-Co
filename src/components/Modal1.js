import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Form1 from './Form1';

import '../styles/Modal.scss';

class Modal1 extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  showModal1(newValue) {
    this.setState({ show: newValue })
  }

  render() {

    return (
      <div>
        <Button bsStyle="success" bsSize="large" onClick={this.handleShow} >
          Request an invite
        </Button>

        <Modal
        show={this.state.show}
        onHide={this.handleClose}
        keyboard={false}
        id="sign-in-modal"
        aria-labelledby="sign-in-modal"
        >
          <Modal.Body>
            <Form1 showModal1={this.showModal1.bind(this)} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Modal1;
