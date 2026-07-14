import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


// 1. Khởi tạo Trụ sở (Context)
export const EmployeeContext = createContext();

// 2. Tạo một Component "Nhà phân phối" (Provider) bao bọc lấy các component con
export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //cách 1: gọi đơn lẻ từng fetch API
    //  useEffect(() => {
    // fetch('http://localhost:8000/employees')
    //     .then(response => response.json())
    //     .then(data => setEmployees(data))
    //     .catch(error => setError(error.message))
    //     .finally(() => setIsLoading(false))

    // fetch('http://localhost:8000/departments')
    //     .then(response => response.json())
    //     .then(data => setDepartments(data))
    //     .catch(error => setError(error.message))
    //     .finally(() => setIsLoading(false))

    //Cách 2: dùng promise để đồng bộ 2 fetch API 
    //     useEffect(() => {
    //     Promise.all([fetch('http://localhost:8000/employees').then(response => response.json()),
    //     fetch('http://localhost:8000/departments').then(response => response.json())])
    //         .then(([emp, dep]) => {
    //             setEmployees(emp)
    //             setDepartments(dep)
    //         })
    //         .catch(error => setError(error.message))
    //         .finally(() => setIsLoading(false))
    // }, []);

    //Cách 3: dùng axios, async/await
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [emp, dep] = await Promise.all([axios.get('http://localhost:8000/employees'), axios.get('http://localhost:8000/departments')])
                setEmployees(emp.data)
                setDepartments(dep.data)
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, []);

    // Tạm thời truyền vào một Object rỗng
    return (
        <EmployeeContext.Provider value={{ employees, departments, isLoading, error, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    )
}
