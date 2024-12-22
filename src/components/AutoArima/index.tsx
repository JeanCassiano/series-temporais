import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface AutoARIMAProps {
  id: string;
}

interface ARIMAData {
  observed: number[];
  predictions?: number[];
}

const TimeSeriesAutoARIMA: React.FC<AutoARIMAProps> = ({ id }) => {
  const [arimaResults, setARIMAResults] = useState<ARIMAData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchARIMAData = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/prediction-model?id=${id}&model=autoarima`);
        setARIMAResults(response.data.best_result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching time series AutoARIMA data:', error);
        setError('Failed to load AutoARIMA data');
        setLoading(false);
      }
    };

    fetchARIMAData();
  }, [id]);

  if (loading) return <div>Loading AutoARIMA data...</div>;
  if (error) return <div>Error: {error}</div>;

  const chartData = arimaResults ? arimaResults.observed.map((value, index) => ({
    index,
    Observed: value,
    Prediction: arimaResults.predictions ? arimaResults.predictions[index] : null
  })) : [];

  return (
    <div>
      <h2>AutoARIMA Results for Series ID: {id}</h2>
      {chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Observed" stroke="#8884d8" />
            {arimaResults?.predictions && <Line type="monotone" dataKey="Prediction" stroke="#82ca9d" />}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TimeSeriesAutoARIMA;
