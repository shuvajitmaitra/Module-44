import { LineChart, Line, XAxis, YAxis } from "recharts";
const LineCharts = () => {
  const studentData = [
    {
      student_id: "1001",
      name: "John Smith",
      math_marks: 98,
      physics_marks: 55,
      chemistry_marks: 89,
    },
    {
      student_id: "1002",
      name: "Emily Johnson",
      math_marks: 65,
      physics_marks: 92,
      chemistry_marks: 45,
    },
    {
      student_id: "1003",
      name: "Michael Brown",
      math_marks: 94,
      physics_marks: 40,
      chemistry_marks: 97,
    },
    {
      student_id: "1004",
      name: "Sophia Davis",
      math_marks: 85,
      physics_marks: 99,
      chemistry_marks: 60,
    },
    {
      student_id: "1005",
      name: "William Wilson",
      math_marks: 75,
      physics_marks: 85,
      chemistry_marks: 94,
    },
  ];
  return (
    <LineChart width={800} height={300} data={studentData}>
      <Line type="monotone" dataKey="math_marks" stroke="red" />
      <Line type="monotone" dataKey="physics_marks" stroke="yellow" />
      <Line type="monotone" dataKey="chemistry_marks" stroke="blue" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default LineCharts;
