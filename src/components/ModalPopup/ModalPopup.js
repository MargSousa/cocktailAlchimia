import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ModalPopup.css';

function ModalPopup(props) {
  const { handlemodal, show } = props;
  return (
    <div>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            No results! Please try again.
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button className="modal-button" onClick={handlemodal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalPopup.propTypes = {
  handlemodal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ModalPopup;
