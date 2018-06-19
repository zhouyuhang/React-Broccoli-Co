import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../styles/Modal.scss';

class Modal2 extends Component {
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

  render() {

    return (
      <div>
        <Button bsStyle="info" bsSize="large" onClick={this.handleShow} id="request-success" className="d-none" >
          Request Success
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="success-modal">
          <Modal.Body>
            <legend className="modal-title">All done!</legend>
            <hr className="modal-hr"/>
            <p>You will be one of the first to experience Broccoli & Co. when we launch.</p>
            <Button type="submit" bsStyle="info" bsSize="large" onClick={this.handleClose} block>
            OK</Button>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

export default Modal2;
