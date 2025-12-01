
import { api } from "./axios";
export const signup = (payload) => api.post("/signup", payload).then(res => res.data);
export const login  = (payload) => api.post("/login", payload).then(res => res.data);
