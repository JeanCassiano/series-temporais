import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ACFProps {
  id: string;
}

interface ACFData {
  lag: number;
  value: number;
}

const TimeSeriesACF: React.FC<ACFProps> = ({ id }) => {
  const [acfData, setAcfData] = useState<ACFData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchACFData = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/acf?id=${id}`);
        const data = response.data.data.map((value: number, index: number) => ({
          lag: index,
          value
        }));
        setAcfData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching time series ACF data:', error);
        setError('Failed to load ACF data');
        setLoading(false);
      }
    };

    fetchACFData();
  }, [id]);

  if (loading) return <div>Loading ACF data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>ACF for Series ID: {id}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={acfData}>
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

export default TimeSeriesACF;
