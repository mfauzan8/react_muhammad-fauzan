import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const Contact = ({ handleInputChange, form, handleSubmit }) => {
    return (
        <div className="contact">
            <div className="container">
                <Row className="p-5">
                    <Col className="col-6 text-white">
                        <h3>Contact US</h3>
                        <p className="mt-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sequi placeat cum ullam! Perferendis, minima eveniet aut explicabo quibusdam vel expedita corporis odit quod at temporibus assumenda, quaerat fuga? Corporis
                            alias, harum reiciendis, provident facilis cumque recusandae ducimus at, voluptatem eligendi blanditiis odio itaque impedit voluptatum dolore aliquam. Molestias blanditiis, quaerat commodi architecto numquam qui fugiat
                        </p>
                    </Col>
                    <Col>
                        <Form className='text-white' >
                            <Row >
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        placeholder="First name"
                                        name='firstname'
                                        value={form.firstname}
                                        onChange={(ev) => handleInputChange(ev)}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        placeholder="Last name"
                                        name='lastname'
                                        value={form.lastname}
                                        onChange={(ev) => handleInputChange(ev)}
                                    />
                                </Col>
                            </Row>
                            <Form.Group className="mt-3 mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    placeholder="Email"
                                    name='email'
                                    value={form.email}
                                    onChange={(ev) => handleInputChange(ev)}
                                />
                            </Form.Group>
                            <Form.Group className="mt-3 mb-3" controlId="Email">
                                <Form.Label>What can we help you with ?</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    name='message'
                                    value={form.message}
                                    onChange={(ev) => handleInputChange(ev)}
                                />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact