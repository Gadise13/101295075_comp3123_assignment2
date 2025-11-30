
import { Router } from "express";
import { employeeValidator } from "../utils/validators.js";
import { validationResult } from "express-validator";
import { auth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import Employee from "../models/Employee.js";

const router = Router();

router.post("/employees", auth, upload.single("profileImage"), employeeValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const data = { ...req.body };
  if (req.file) data.profileImageUrl = `/uploads/${req.file.filename}`;
  const employee = await Employee.create(data);
  res.status(201).json(employee);
});

router.get("/employees", auth, async (_req, res) => {
  const list = await Employee.find().sort({ createdAt: -1 });
  res.json(list);
});

router.get("/employees/:id", auth, async (req, res) => {
  const emp = await Employee.findById(req.params.id);
  if (!emp) return res.status(404).json({ message: "Not found" });
  res.json(emp);
});

router.put("/employees/:id", auth, upload.single("profileImage"), employeeValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const data = { ...req.body };
  if (req.file) data.profileImageUrl = `/uploads/${req.file.filename}`;
  const emp = await Employee.findByIdAndUpdate(req.params.id, data, { new: true });
  if (!emp) return res.status(404).json({ message: "Not found" });
  res.json(emp);
});

router.delete("/employees/:id", auth, async (req, res) => {
  const emp = await Employee.findByIdAndDelete(req.params.id);
  if (!emp) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
});

router.get("/employees/search", auth, async (req, res) => {
  const { department, position } = req.query;
  const filter = {};
  if (department) filter.department = new RegExp(`^${department}$`, "i");
  if (position) filter.position = new RegExp(`^${position}$`, "i");
  const results = await Employee.find(filter).sort({ lastName: 1 });
  res.json(results);
});

export default router;
