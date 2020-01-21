import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const AddBookModal = ({show, closeModal}) => {
    
    return (
        <div>
            <Modal  show={show} >
                <Modal.Header>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Title:</label>
                    <input type='text' className="form-control form-control-sm" ></input>
                    <label>Description:</label>
                    <input type='text' className="form-control form-control-sm"></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary'>Add</Button>
                    <Button variant='secondary' onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddBookModal