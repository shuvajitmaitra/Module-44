import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const RandarCharts = () => {
  const studentData = [
    {
      student_id: "1001",
      name: "John Smith",
      math_marks: 98,
      physics_marks: 55,
      chemistry_marks: 89,
      full_marks: 100,
    },
    {
      student_id: "1002",
      name: "Emily Johnson",
      math_marks: 65,
      physics_marks: 92,
      chemistry_marks: 45,
      full_marks: 100,
    },
    {
      student_id: "1003",
      name: "Michael Brown",
      math_marks: 94,
      physics_marks: 40,
      chemistry_marks: 97,
      full_marks: 100,
    },
    {
      student_id: "1004",
      name: "Sophia Davis",
      math_marks: 85,
      physics_marks: 99,
      chemistry_marks: 60,
      full_marks: 100,
    },
    {
      student_id: "1005",
      name: "William Wilson",
      math_marks: 75,
      physics_marks: 85,
      chemistry_marks: 94,
      full_marks: 100,
    },
  ];
  return (
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={studentData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="Hello"
        dataKey="math_marks"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="world"
        dataKey="chemistry_marks"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default RandarCharts;
