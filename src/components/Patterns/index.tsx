import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface PatternsProps {
  id: string;
}

interface PatternData {
  index: number;
  value: number;
}

const TimeSeriesPatterns: React.FC<PatternsProps> = ({ id }) => {
  const [patterns, setPatterns] = useState<PatternData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatterns = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/patterns?id=${id}`);
        const patternData = response.data.patterns.data.map((value: number, index: number) => ({
          index,
          value
        }));
        setPatterns(patternData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching time series patterns:', error);
        setError('Failed to load patterns');
        setLoading(false);
      }
    };

    fetchPatterns();
  }, [id]);

  if (loading) return <div>Loading patterns...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Patterns for Series ID: {id}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={patterns} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesPatterns;
