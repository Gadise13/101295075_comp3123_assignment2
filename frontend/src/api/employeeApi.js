
import { api } from "./axios";

export const getEmployees = () => api.get("/employees").then(r => r.data);
export const getEmployee  = (id) => api.get(`/employees/${id}`).then(r => r.data);
export const searchEmployees = (params) => api.get("/employees/search", { params }).then(r => r.data);

export const createEmployee = (data) => {
  const form = new FormData();
  Object.entries(data).forEach(([k, v]) => v !== undefined && form.append(k, v));
  return api.post("/employees", form, { headers: { "Content-Type": "multipart/form-data" } }).then(r => r.data);
};

export const updateEmployee = (id, data) => {
  const form = new FormData();
  Object.entries(data).forEach(([k, v]) => v !== undefined && form.append(k, v));
  return api.put(`/employees/${id}`, form, { headers: { "Content-Type": "multipart/form-data" } }).then(r => r.data);
};

export const deleteEmployee = (id) => api.delete(`/employees/${id}`).then(r => r.data);
