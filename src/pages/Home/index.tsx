// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from '../../components/Chart/index.tsx';

interface DataPoint {
  name: string;
  value: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        const formattedData = response.data.map((value: number, index: number) => ({
          name: `Point ${index + 1}`,
          value: value,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard de Resultados em R</h1>
      <ChartComponent data={data} />
    </div>
  );
};

export default Home;
