import { useState, useMemo, useContext } from "react";
import { Table, Button } from "react-bootstrap";
import React from 'react';
import { EmployeeContext } from "../context/EmployeeContext";

export default function EmployeeList() {

    const [selectEmpId, setSelectEmpId] = useState(null);
    const { employees, departments, isLoading, error } = useContext(EmployeeContext);

    const getDepartmentName = (depId) => {
        const department = departments.find(dep => dep.id == depId)
        return department ? department.depName : 'Not found'
    }

    const totalDependents = useMemo(() => {
        return employees.reduce((totalDependent, employee) => {
            totalDependent += employee.dependents.length
            return totalDependent
        }, 0)
    }, [employees])

    if (isLoading) return <p className="text-info">Loading employees...</p>
    if (error) return <p className="text-danger">Error: {error}</p>
    return (
        <div>
            <h2>Danh sách nhân viên</h2>
            <h5>Tổng số người phụ thuộc: {totalDependents}</h5>
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
                        <React.Fragment key={employee.id}>
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.empName?.firstName + ' ' + employee.empName?.lastName}</td>
                                <td>{employee.empGender}</td>
                                <td>{getDepartmentName(employee.depId)}</td>
                                <td>
                                    <Button variant="primary" size="sm" onClick={() => setSelectEmpId(selectEmpId === employee.id ? null : employee.id)}>
                                        {selectEmpId === employee.id ? 'Hide' : 'View'}
                                    </Button>
                                </td>
                            </tr>
                            {selectEmpId === employee.id && (
                                <tr>
                                    <td>ID:</td>
                                    <td>{employee.id}</td>
                                    <td colSpan={3}>
                                        {employee.dependents.map((dependent, index) => (
                                            <div key={index}>
                                                <p>Name: {dependent.fullName}</p>
                                                <p>Birth Date: {dependent.birthDate}</p>
                                                <p>Relationship: {dependent.relationship}</p>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    )}
                </tbody>
            </Table>
        </div>
    )
}