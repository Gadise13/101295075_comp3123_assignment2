
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEmployees, searchEmployees, deleteEmployee } from "../api/employeeApi";
import { useNavigate } from "react-router-dom";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function EmployeeList() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [searchMode, setSearchMode] = useState(false);

  const { data: employees = [], isLoading } = useQuery({
    queryKey: searchMode ? ["employees", { department, position }] : ["employees"],
    queryFn: () => searchMode ? searchEmployees({ department, position }) : getEmployees()
  });

  const onDelete = async (id) => {
    if (!confirm("Delete employee?")) return;
    await deleteEmployee(id);
    qc.invalidateQueries({ queryKey: ["employees"] });
    qc.invalidateQueries({ queryKey: ["employees", { department, position }] });
  };

  return (
    <div className="container mt-4">
      <Row className="mb-3">
        <Col><h4>Employees</h4></Col>
        <Col className="text-end">
          <Button onClick={() => navigate("/employees/new")}>Add Employee</Button>
        </Col>
      </Row>

      <Form className="mb-3" onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md={4}>
            <Form.Control placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </Col>
          <Col md={4}>
            <Form.Control placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
          </Col>
          <Col md={4}>
            <Button className="me-2" onClick={() => setSearchMode(true)}>Search</Button>
            <Button variant="secondary" onClick={() => { setSearchMode(false); setDepartment(""); setPosition(""); }}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>

      {isLoading ? <div>Loading...</div> : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Photo</th><th>Name</th><th>Email</th><th>Department</th><th>Position</th><th>Salary</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp._id}>
                <td>{emp.profileImageUrl && <img src={`http://localhost:5000${emp.profileImageUrl}`} width={48} height={48} alt="profile" />}</td>
                <td>{emp.firstName} {emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>${emp.salary?.toLocaleString()}</td>
                <td>
                  <Button size="sm" onClick={() => navigate(`/employees/${emp._id}`)} className="me-2">View</Button>
                  <Button size="sm" onClick={() => navigate(`/employees/${emp._id}/edit`)} className="me-2">Edit</Button>
                  <Button size="sm" variant="danger" onClick={() => onDelete(emp._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
