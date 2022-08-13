import React from 'react';
import { Form } from 'react-bootstrap';

const check = ({child}) => {
    console.log(child.title)
    return (
        <div>
            <Form>
                <Form.Check label={child.title}></Form.Check>
            </Form>
        </div>
    );
};

export default check;