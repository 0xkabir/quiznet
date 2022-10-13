import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData().data
    const chartData = []
    data.map(topic => {
        const details = {name:topic.name, total:topic.total}
        return chartData.push(details)
    })
    const getIntroOfPage = (label) => {
        if (label === 'React') {
          return "React Interview Questions";
        }
        if (label === 'JavaScript') {
          return "JavaScript Interview Questions";
        }
        if (label === 'CSS') {
          return "CSS Interview Questions";
        }
        if (label === 'Git') {
          return "Git Interview Questions";
        }
        return '';
      };
      
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label}`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
              <p className="desc">Total {payload[0].value} Question</p>
            </div>
          );
        }
      
        return null;
      };
    return (
        <div>
            <h1 className='text-2xl md:text-4xl font-bold text-center my-10'>Overview of the Topics</h1>
            <div className='md:w-[70vw] lg:w-[40vw] mx-auto md:h-[60vh] w-[100vw] h-[60vh] flex flex-col items-center'>
            <ResponsiveContainer>
            <BarChart width={300} height={200} barSize={20} barGap={50} data={chartData}>
                 <Bar dataKey="total" fill="#64748b" />
                 <XAxis dataKey="name" />
                <YAxis />
                 <Tooltip cursor={false} content={<CustomTooltip />}/>
            </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;