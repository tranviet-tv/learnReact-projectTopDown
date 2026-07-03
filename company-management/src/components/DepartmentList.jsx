import { useState, useEffect } from "react";

export default function DepartmentList() {

    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/departments')
            .then(response => response.json())
            .then(data => {
                setDepartments(data);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }, []);

    if (isLoading) return <p className="text-info">Loading departments...</p>
    if (error) return <p className="text-danger">Error: {error}</p>

    return (
        <div>
            <h2>Danh sách phòng ban</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Ten phong ban</th>
                        <th>Quan ly phong ban</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.depName}</td>
                            <td>{department.managerId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}