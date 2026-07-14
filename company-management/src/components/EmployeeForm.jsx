import { Form, Button } from 'react-bootstrap';
import { useReducer, useState, useContext } from 'react';
import axios from 'axios';
import { EmployeeContext } from "../context/EmployeeContext";

export default function EmployeeForm() {

    const { setEmployees, departments } = useContext(EmployeeContext);

    const initialFormState = {
        firstName: '',
        lastName: '',
        gender: 'Male',
        department: '',
        dependents: []
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
        const newEmployee = {
            empName: {
                firstName: formState.firstName,
                lastName: formState.lastName
            },
            empGender: formState.gender,
            depId: Number(formState.department),
            dependents: []
        }
        console.log("Form hợp lệ, tiến hành submit!");
        axios.post('http://localhost:8000/employees', newEmployee)
            .then((response) => {
                const createdEmployee = response.data;
                console.log(createdEmployee);
                setEmployees(prevEmployees => [...prevEmployees, createdEmployee])
                dispatch({ type: 'HANDLE_SUBMIT' });
                setValidated(false);
            })
            .catch(err => console.log(err))
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
                    <Form.Select
                        name='department'
                        value={formState.department}
                        onChange={handleChange}
                        required>
                        <option value="">-- Chọn phòng ban --</option>
                        {departments.map((dep) =>
                            <option value={dep.id} key={dep.id}>
                                {dep.depName}
                            </option>
                        )}
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>
                        Vui lòng chọn Department!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant='primary' type='submit'>Thêm nhân viên</Button>
            </Form>
        </div >
    )
}
