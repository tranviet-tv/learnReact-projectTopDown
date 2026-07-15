import { EmployeeProvider } from "./context/EmployeeContext";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import Login from "./components/Login";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <EmployeeProvider>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route element={<AppLayout />}>
                                <Route path="/" element={<EmployeeList />} />
                                <Route path="/add-employee" element={<EmployeeForm />} />
                            </Route>
                        </Routes>
                    </EmployeeProvider>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}