
export default function DepartmentList() {
    const mockDepartments = [
        { id: 1, name: "Phong nhan su", managerId: 101 },
        { id: 2, name: "Phong quan he khach hang", managerId: 102 },
        { id: 3, name: "Phong Marketing", managerId: 103 },
        { id: 4, name: "Phong quan he khach hang", managerId: 104 }
    ]

    return (
        <div>
            <h2>Danh sách phòng ban</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Ten phong ban</th>
                    <th>Quan ly phong ban</th>
                </tr>
                {mockDepartments.map((department) => (
                    <tr>
                        <td>{department.id}</td>
                        <td>{department.name}</td>
                        <td>{department.managerId}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}