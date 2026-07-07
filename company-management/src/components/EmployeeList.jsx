import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //cách 1: gọi đơn lẻ từng fetch API
    //  useEffect(() => {
    // fetch('http://localhost:8000/employees')
    //     .then(response => response.json())
    //     .then(data => setEmployees(data))
    //     .catch(error => setError(error.message))
    //     .finally(() => setIsLoading(false))

    // fetch('http://localhost:8000/departments')
    //     .then(response => response.json())
    //     .then(data => setDepartments(data))
    //     .catch(error => setError(error.message))
    //     .finally(() => setIsLoading(false))

    //Cách 2: dùng promise để đồng bộ 2 fetch API 
    //     useEffect(() => {
    //     Promise.all([fetch('http://localhost:8000/employees').then(response => response.json()),
    //     fetch('http://localhost:8000/departments').then(response => response.json())])
    //         .then(([emp, dep]) => {
    //             setEmployees(emp)
    //             setDepartments(dep)
    //         })
    //         .catch(error => setError(error.message))
    //         .finally(() => setIsLoading(false))
    // }, []);

    //Cách 3: dùng axios, async/await
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [emp, dep] = await Promise.all([axios.get('http://localhost:8000/employees'), axios.get('http://localhost:8000/departments')])
                setEmployees(emp.data)
                setDepartments(dep.data)
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, []);

    if (isLoading) return <p className="text-info">Loading employees...</p>
    if (error) return <p className="text-danger">Error: {error}</p>

    const getDepartmentName = (depId) => {
        const department = departments.find(dep => dep.id == depId)
        return department ? department.depName : 'Not found'
    }


    return (
        <div>
            <h2>Danh sách nhân viên</h2>
            <Table striped bordered hover >
                <thead>
                    <tr className="table-dark">
                        <th>ID</th>
                        <th>Ten nhan vien</th>
                        <th>Gioi tinh</th>
                        <th>Phong ban</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.empName?.firstName + ' ' + employee.empName?.lastName}</td>
                            <td>{employee.empGender}</td>
                            <td>{getDepartmentName(employee.depId)}</td>
                            <td>
                                <Button variant="primary" size="sm">View</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}