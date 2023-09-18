import axios from "axios";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { useState } from "react";

const Axios = () => {
  const [data, setData] = useState([]);
  axios.get("./data.json").then((data) => setData(data.data));
  return (
    <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default Axios;
