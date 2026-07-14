import { EmployeeProvider } from "./context/EmployeeContext";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./components/AppLayout";

export default function App() {
    return (
        <>
            <AuthProvider>
                <EmployeeProvider>
                    <h1>Quản lý công ty</h1>
                    <AppLayout />
                </EmployeeProvider>
            </AuthProvider >
        </>
    )
}