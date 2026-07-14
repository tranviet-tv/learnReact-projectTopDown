import DepartmentList from "./DepartmentList";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import Login from "./Login";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function AppLayout() {
    const { isAuthenticated } = useContext(AuthContext)
    const { user } = useContext(AuthContext)

    if (!isAuthenticated) {
        return <Login />
    }
    return (
        <>
            <DepartmentList />
            <EmployeeForm />
            <EmployeeList />
        </>
    )
}
