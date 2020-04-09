import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const BoardCreateForm = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Title
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="title" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Content
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="content" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Add</Button>
                    </Col>
                </Form.Group>

            </Form>
        </div>
    );
};

export default BoardCreateForm;