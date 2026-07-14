import { Form, Button } from 'react-bootstrap';
import { useEffect, useReducer, useState } from 'react';

export default function EmployeeForm() {

    const initialFormState = {
        firstName: '',
        lastName: '',
        gender: 'Male',
        department: ''
    }

    const [validated, setValidated] = useState(false);

    const formReducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE_INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }

            case 'HANDLE_SUBMIT':
                return initialFormState;

            default:
                return state
        }
    }

    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE_INPUT', payload: { name, value } })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidated(true)
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            console.log("Form đang bị lỗi, chưa nhập đủ thông tin!");
            // Tạm thời chỉ in ra console, không submit
            return;
        }
        console.log("Form hợp lệ, tiến hành submit!");
        dispatch({ type: 'HANDLE_SUBMIT' })
    }

    return (
        <div>
            <h2>Thêm nhân viên</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name='firstName'
                        type='text' value={formState.firstName}
                        onChange={handleChange}
                        required
                        placeholder='Enter first name....'></Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        Vui lòng nhập First Name!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='lastName'
                        type='text' value={formState.lastName}
                        onChange={handleChange}
                        required
                        placeholder='Enter last name....' />
                    <Form.Control.Feedback type='invalid'>
                        Vui lòng nhập Last Name!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name='gender' value={formState.gender} onChange={handleChange}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Department</Form.Label>
                    <Form.Control name='department' value={formState.department} onChange={handleChange} type='text' placeholder='Enter department....' />
                </Form.Group>
                <Button variant='primary' type='submit'>Thêm nhân viên</Button>
            </Form>
        </div >
    )
}
