
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEmployee } from "../api/employeeApi";

export default function EmployeeDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({ queryKey: ["employee", id], queryFn: () => getEmployee(id) });
  if (isLoading) return <div className="container mt-4">Loading...</div>;
  if (!data) return <div className="container mt-4">Not found</div>;
  return (
    <div className="container mt-4">
      <h4>{data.firstName} {data.lastName}</h4>
      {data.profileImageUrl && <img src={`http://localhost:5000${data.profileImageUrl}`} alt="profile" width={120} />}
      <p><b>Email:</b> {data.email}</p>
      <p><b>Department:</b> {data.department}</p>
      <p><b>Position:</b> {data.position}</p>
      <p><b>Salary:</b> ${data.salary?.toLocaleString()}</p>
    </div>
  );
}
