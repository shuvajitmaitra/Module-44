import { BarChart, Bar, XAxis, YAxis } from "recharts";
const BarCharts = () => {
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
      math_marks: 67,
      physics_marks: 30,
      chemistry_marks: 97,
    },
    {
      student_id: "1004",
      name: "Sophia Davis",
      math_marks: 13,
      physics_marks: 56,
      chemistry_marks: 89,
    },
    {
      student_id: "1005",
      name: "William Wilson",
      math_marks: 23,
      physics_marks: 35,
      chemistry_marks: 67,
    },
  ];
  return (
    <BarChart width={800} height={500} data={studentData}>
      <XAxis dataKey="name" />

      <YAxis />
      <Bar dataKey="math_marks" fill="green" minPointSize={10} />
      <Bar dataKey="physics_marks" fill="red" minPointSize={10} />
      <Bar dataKey="chemistry_marks" fill="blue" minPointSize={10} />
    </BarChart>
  );
};

export default BarCharts;
