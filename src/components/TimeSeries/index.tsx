import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TimeSeriesChartProps {
  id: string;
}

interface TimeSeriesData {
  date: string;
  value: number;
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ id }) => {
  const [data, setData] = useState<TimeSeriesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/get/${id}`);
        const formattedData = response.data.time_series.map((item: any) => ({
          date: item.VALDATA.split('T')[0], // Apenas a data, sem a hora
          value: item.VALVALOR
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <h2>Time Series Data for ID: {id}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesChart;
