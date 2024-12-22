import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface PACFProps {
  id: string;
}

interface PACFData {
  lag: number;
  value: number;
}

const TimeSeriesPACF: React.FC<PACFProps> = ({ id }) => {
  const [pacfData, setPACFData] = useState<PACFData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPACFData = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/pacf?id=${id}`);
        const data = response.data.data.map((value: number, index: number) => ({
          lag: index,
          value
        }));
        setPACFData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching time series PACF data:', error);
        setError('Failed to load PACF data');
        setLoading(false);
      }
    };

    fetchPACFData();
  }, [id]);

  if (loading) return <div>Loading PACF data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>PACF for Series ID: {id}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={pacfData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lag" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesPACF;
