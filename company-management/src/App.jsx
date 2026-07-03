import DepartmentList from "./components/DepartmentList";
import EmployeeList from "./components/EmployeeList";

export default function App() {
    return (
        <>
            <h1>Quản lý công ty</h1>
            <DepartmentList />
            <EmployeeList />
        </>
    )
}