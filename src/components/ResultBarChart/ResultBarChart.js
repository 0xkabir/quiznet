import React, { useContext } from 'react';
import { ResultContext } from '../Quiz/Quiz';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultBarChart = () => {
    const data = useContext(ResultContext)
    return (
        <ResponsiveContainer>
            <BarChart width={300} height={200} barSize={20} barGap={50} data={data}>
                <Bar dataKey="value" fill="#64748b" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={false}/>
            </BarChart>
            </ResponsiveContainer>
    );
};

export default ResultBarChart;