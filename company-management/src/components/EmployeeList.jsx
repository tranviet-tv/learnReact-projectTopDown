import { useState, useEffect } from "react";

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/employees')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))

        fetch('http://localhost:8000/departments')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
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
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
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
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}