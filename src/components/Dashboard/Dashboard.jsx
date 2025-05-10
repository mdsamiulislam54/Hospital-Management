import React from "react";
import { useSelector } from "react-redux";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
const Dashboard = () => {
  const doctor = useSelector((state) => state.doctor.doctor);


  const chartData = doctor.map((item,index ) => ({
    name: item.doctor.full_name || `Doctor ${index + 1}`,
    fee: item.doctor.consultation_fee,
   
  }));
  console.log(  chartData)
  return (
    <div className="xl:ml-63 px-4 h-screen overflow-y-scroll bg-white">
      <h4 className="text-3xl font-bold my-4 text-center">Total Appointment</h4>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name"  />
          <YAxis dataKey='' />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="fee" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="fee" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="fee" stroke="#ff7300" />
          <Scatter dataKey="fee" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
