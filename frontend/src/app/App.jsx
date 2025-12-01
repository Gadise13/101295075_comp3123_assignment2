
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import EmployeeList from "../pages/EmployeeList.jsx";
import EmployeeForm from "../pages/EmployeeForm.jsx";
import EmployeeDetail from "../pages/EmployeeDetail.jsx";
import ProtectedRoute from "../routes/ProtectedRoute.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}> 
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/new" element={<EmployeeForm />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
          <Route path="/employees/:id/edit" element={<EmployeeForm />} />
        </Route>
        <Route path="*" element={<div className="p-4">Not Found</div>} />
      </Routes>
    </>
  );
}
