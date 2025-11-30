
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/authApi";
import { Alert, Button, Form } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault(); setError(null);
    try {
      const { token } = await login({ email, password });
      localStorage.setItem("token", token); navigate("/employees");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="container mt-4" style={{ maxWidth: 480 }}>
      <h3>Login</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
        </Form.Group>
        <Button type="submit">Login</Button>{" "}
        <Link to="/signup">Create account</Link>
      </Form>
    </div>
  );
}
