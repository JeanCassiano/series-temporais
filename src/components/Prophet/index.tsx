import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ProphetProps {
  id: string;
}

interface ProphetData {
  ds: number;
  yhat: number;
  yhat_lower: number;
  yhat_upper: number;
}

const TimeSeriesProphet: React.FC<ProphetProps> = ({ id }) => {
  const [data, setData] = useState<ProphetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/prediction-model`, {
          params: { id, model: 'prophet' }
        });
        // Transform data to appropriate format
        const formattedData = response.data.best_result.map((item: any) => ({
          ds: new Date(item.ds).toLocaleDateString(), // Converting timestamp to readable date
          yhat: item.yhat,
          yhat_lower: item.yhat_lower,
          yhat_upper: item.yhat_upper
        }));
        setData(formattedData);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data: ' + err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ds" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="yhat" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="yhat_lower" stroke="#82ca9d" />
        <Line type="monotone" dataKey="yhat_upper" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesProphet;
