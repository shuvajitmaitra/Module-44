import { LineChart, Line } from "recharts";
const LineCharts = () => {
  const studentData = [
    {
      student_id: "1001",
      name: "John Smith",
      math_marks: 92,
      physics_marks: 88,
      chemistry_marks: 75,
    },
    {
      student_id: "1002",
      name: "Emily Johnson",
      math_marks: 78,
      physics_marks: 90,
      chemistry_marks: 85,
    },
    {
      student_id: "1003",
      name: "Michael Brown",
      math_marks: 85,
      physics_marks: 76,
      chemistry_marks: 92,
    },
    {
      student_id: "1004",
      name: "Sophia Davis",
      math_marks: 95,
      physics_marks: 92,
      chemistry_marks: 88,
    },
    {
      student_id: "1005",
      name: "William Wilson",
      math_marks: 88,
      physics_marks: 85,
      chemistry_marks: 80,
    },
  ];

  return (
    <LineChart width={500} height={300} data={studentData}>
      <Line type="monotone" dataKey="math_marks" stroke="red" />
      <Line type="monotone" dataKey="physics_marks" stroke="yellow" />
      <Line type="monotone" dataKey="chemistry_marks" stroke="blue" />
    </LineChart>
  );
};

export default LineCharts;
