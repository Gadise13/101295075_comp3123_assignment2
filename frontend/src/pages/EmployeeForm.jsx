
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEmployee, createEmployee, updateEmployee } from "../api/employeeApi";
import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function EmployeeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const { data, isLoading } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployee(id),
    enabled: isEdit
  });

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", department: "", position: "", salary: "" });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { if (data) setForm({ ...form, ...data, salary: data.salary ?? "" }); }, [data]);
  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault(); setError(null);
    try {
      const payload = { ...form };
      if (file) payload.profileImage = file;
      if (!isEdit) await createEmployee(payload); else await updateEmployee(id, payload);
      navigate("/employees");
    } catch (err) { setError(err?.response?.data?.message || "Save failed"); }
  };

  if (isEdit && isLoading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4" style={{ maxWidth: 640 }}>
      <h4>{isEdit ? "Edit Employee" : "Add Employee"}</h4>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={onSubmit}>
        {['firstName','lastName','email','department','position','salary'].map((name) => (
          <Form.Group className="mb-3" key={name}>
            <Form.Label>{name}</Form.Label>
            <Form.Control name={name} value={form[name]} onChange={onChange} required={name !== 'salary'} type={name === 'salary' ? 'number' : (name === 'email' ? 'email' : 'text')} />
          </Form.Group>
        ))}
        <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        </Form.Group>
        <Button type="submit">{isEdit ? "Update" : "Create"}</Button>
      </Form>
    </div>
  );
}
