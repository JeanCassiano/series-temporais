import React from 'react';
import { Container, Title, Description, ChartWrapper } from './styles.tsx';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Dados do gráfico
const data = [
  { name: 'Type 1', value: 9.6 },
  { name: 'Type 2', value: 12 },
  { name: 'Type 3', value: 30.1 },
  { name: 'Type 4', value: 12 },
  { name: 'Type 5', value: 36.1 },
];

// Cores para cada parte do gráfico
const COLORS = ['#027ed1', '#ffb6c1', '#38d14a', '#f0e84d', '#f25535'];

const OurDataSet: React.FC = () => {
  return (
    <Container>
      <Title>NOSSO DATASET</Title>
      <Description>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Nostra elit torquent laoreet rhoncus phasellus suspendisse quis.
      </Description>
      <ChartWrapper>
        <ResponsiveContainer width="115%" height="140%">
          <PieChart>
          <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="40%"  // Responsivo: ajuste o raio interno conforme a largura
              outerRadius="70%"  // Responsivo: ajuste o raio externo conforme a largura
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Container>
  );
};

export default OurDataSet;
