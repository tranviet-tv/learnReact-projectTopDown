import DepartmentList from "./components/DepartmentList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { EmployeeProvider } from "./context/EmployeeContext";

export default function App() {
    return (
        <>
            <EmployeeProvider>
                <h1>Quản lý công ty</h1>
                <DepartmentList />
                <EmployeeForm />
                <EmployeeList />
            </EmployeeProvider>
        </>
    )
}