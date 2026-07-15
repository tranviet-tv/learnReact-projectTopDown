import { Outlet, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppLayout() {
    const { isAuthenticated } = useContext(AuthContext)

    // Nếu chưa đăng nhập -> điều hướng về trang login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return (
        <>
            <header>
                <h1>Quản lý nhân sự</h1>
                <nav>
                    <Link className="btn btn-success" to="/">Trang chủ</Link>
                    <Link className="btn btn-primary" to="/add-employee">Thêm nhân viên</Link>
                </nav>
            </header>
            {/* Content hiển thị theo từng page */}
            <Outlet />
        </>
    )
}
