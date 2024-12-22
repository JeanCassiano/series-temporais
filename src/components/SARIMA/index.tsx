import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// Interface to accept SARIMA parameters including seasonal parts
interface SARIMAProps {
  id: string;
  params: {
    p: number;
    d: number;
    q: number;
    P: number;
    D: number;
    Q: number;
    s?: number; // Make seasonal period optional in props
  };
}

interface ChartData {
  index: number;
  value: number;
}

const TimeSeriesSARIMA: React.FC<SARIMAProps> = ({ id, params }) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Set default seasonal period to 12 if not provided
  const s = params.s || 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use all params including s, now with a default or provided value
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/prediction-model`, {
          params: { id, model: 'sarima', ...params, s }
        });
        if (response.data.best_result && response.data.best_result.observed) {
          const formattedData = response.data.best_result.observed.map((value: number, index: number) => ({
            index: index + 1,
            value
          }));
          setData(formattedData);
        } else {
          throw new Error("Invalid data structure");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('Error loading data: ' + err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, params, s]); // Include s in dependencies for re-fetching if changed

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>{error}</div>;

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

export default TimeSeriesSARIMA;
