import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import { CanvasContainer } from './styles.tsx'; // Importando o estilo

const TimeSeriesChart: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [progress, setProgress] = useState(0);
  const [visibleData, setVisibleData] = useState<any[]>([]);
  type DataPoint = { name: string; red: number; green: number; cyan: number };

  const data: DataPoint[] = [];
  const generateData = (numPoints: number): DataPoint[] => {
    const newData: DataPoint[] = [];
    for (let i = 1; i <= numPoints; i++) {
      const red = Math.floor(Math.random() * 1001);
      const green = Math.floor(Math.random() * 1001);
      const cyan = Math.floor(Math.random() * 1001);
      newData.push({ name: `Point ${i + data.length}`, red, green, cyan });
    }
    return newData;
  };

  const additionalData = generateData(50);
  data.push(...additionalData);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          setVisibleData(data.slice(0, newProgress));
          if (newProgress >= data.length) {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 80);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="card bg-dark text-white"
      style={{
        width: '100%',
        marginBottom: '20px',
        marginTop: '40px',
      }}
    >
      <div className="card-body">
        <h5 className="card-title">Just a sample of what we will cover</h5>
        <CanvasContainer>
          <LineChart
            width={600}
            height={400}
            data={visibleData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="red" stroke="#ff0000" strokeWidth={1.5} />
            <Line type="monotone" dataKey="green" stroke="#00ff00" strokeWidth={1.5} />
            <Line type="monotone" dataKey="cyan" stroke="#00ffff" strokeWidth={1.5} />
          </LineChart>
        </CanvasContainer>
      </div>
    </div>
  );
};

export default TimeSeriesChart;
