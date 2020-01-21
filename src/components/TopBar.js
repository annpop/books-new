import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Form, Col, Row, Button } from 'react-bootstrap'
import './TobBar.css'
import AddBookModal from './AddBookModal'

const TopBar = ({openModal}) => {
    
        return (
            <div className='form-topbar'>
                <Form >
                    <Row >
                        <Col>
                            <Form.Control placeholder='Search'/>    
                        </Col>
                        <Col>
                            <Button onClick={openModal} variant='success'>Add</Button>
                            <Button variant='primary'>Edit</Button>
                            <Button variant='danger'>Delete</Button>
                        </Col>
                    </Row>
                </Form>
                <AddBookModal />
            </div>
        )
}

export default TopBar