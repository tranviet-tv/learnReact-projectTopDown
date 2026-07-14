import { EmployeeProvider } from "./context/EmployeeContext";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./components/AppLayout";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <EmployeeProvider>
                        <h1>Quản lý công ty</h1>
                        <AppLayout />
                    </EmployeeProvider>
                </AuthProvider >
            </BrowserRouter>
        </>
    )
}