import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

interface ARIMAProps {
  id: string;
  p: number;
  d: number;
  q: number;
}

const TimeSeriesARIMA: React.FC<ARIMAProps> = ({ id, p, d, q }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api-series-temporais-production-2007.up.railway.app/time-series/prediction-model?id=${id}&model=arima&p=${p}&d=${d}&q=${q}`;
        const response = await axios.get(url);
        console.log("API Response:", response.data); // Log the API response to debug

        // Assuming response.data.best_result.observed is the array you need
        const chartData = response.data.best_result.observed.map((value: number, index: number) => ({
          index: index + 1, // Create an index for x-axis if needed
          value: value
        }));

        setData(chartData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('Error loading data: ' + err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, p, d, q]);

  if (loading) {
    return <div>Loading data...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesARIMA;
