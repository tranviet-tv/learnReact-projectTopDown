import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Login from './Login';
import { AuthContext } from '../context/AuthContext';

describe('Login Component', () => {
    it('Render giao diện Login cơ bản thành công', () => {
        // 1. Dựng Provider giả với các hàm vi.fn() (hàm theo dõi của Vitest)
        const mockAuthValue = {
            setIsAuthenticated: vi.fn(),
            setUser: vi.fn()
        };

        // 2. Render ảo Component ra DOM
        render(
            <AuthContext.Provider value={mockAuthValue}>
                <Login />
            </AuthContext.Provider>
        );

        // 3. Kiểm tra (Bạn hãy tự viết code kiểm tra ở đây)
        // Yêu cầu: 
        // - Lấy thẻ tiêu đề có chữ "Login" và kiểm tra xem nó có nằm trong Document không?
        // - Lấy ô Input có nhãn (Label) là "Username" và kiểm tra xem nó có nằm trong Document không?

        // Gợi ý hàm: 
        // screen.getByRole('heading', { name: 'Login' })
        // screen.getByLabelText('Username')
        // .toBeInTheDocument()
        const headerLogin = screen.getByRole('heading', { name: 'Login' })
        const inputUserName = screen.getByLabelText('Username')

        expect(headerLogin).toBeInTheDocument()
        expect(inputUserName).toBeInTheDocument()

    });

    it('Gọi hàm setIsAuthenticated khi submit form', () => {
        // 1. Vẫn cần Mock y hệt bài trước
        const mockAuthValue = {
            setIsAuthenticated: vi.fn(),
            setUser: vi.fn()
        };

        render(
            <AuthContext.Provider value={mockAuthValue}>
                <Login />
            </AuthContext.Provider>
        );

        // 2. Tìm các phần tử giao diện
        const inputUserName = screen.getByLabelText('Username');
        const inputPassword = screen.getByLabelText('Password');
        const loginBtn = screen.getByRole('button', { name: /login/i });

        // 3. Mô phỏng hành động của người dùng (Gõ phím & Bấm chuột)
        // Dùng fireEvent.change để giả lập sự kiện onChange
        fireEvent.change(inputUserName, { target: { value: 'admin', name: 'userName' } });
        // BẠN LÀM TIẾP: dùng fireEvent.change để nhập '123456' vào inputPassword, nhớ thêm name: 'password'
        fireEvent.change(inputPassword, { target: { value: '123456', name: 'password' } })

        // BẠN LÀM TIẾP: dùng fireEvent.click() để giả lập việc bấm nút loginBtn
        fireEvent.click(loginBtn)

        // 4. Kiểm chứng xem logic bên trong có chạy đúng thiết kế không?
        expect(mockAuthValue.setIsAuthenticated).toHaveBeenCalledWith(true);
    });

});
