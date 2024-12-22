import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface StationaryProps {
  id: string;
}

interface StationaryData {
  index: number;
  value: number;
}

const TimeSeriesStationary: React.FC<StationaryProps> = ({ id }) => {
  const [stationaryData, setStationaryData] = useState<StationaryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStationaryData = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/stationary?id=${id}`);
        const data = response.data.data.map((value: number, index: number) => ({
          index,
          value
        }));
        setStationaryData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching time series stationary data:', error);
        setError('Failed to load stationary data');
        setLoading(false);
      }
    };

    fetchStationaryData();
  }, [id]);

  if (loading) return <div>Loading stationary data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Stationary Test Results for Series ID: {id}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stationaryData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
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

export default TimeSeriesStationary;
