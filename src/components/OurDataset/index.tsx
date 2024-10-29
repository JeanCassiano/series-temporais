import React from 'react';
import { Container, Title, Description, ChartWrapper } from './styles.tsx';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { FaTimes } from 'react-icons/fa'; 
// Dados do gráfico
const data = [
  { name: 'Type 1', value: 9.6, description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris sagittis eleifend mattis conubia, etiam sit luctus facilisi nunc. Laoreet turpis aliquam euismod penatibus cursus sem consequat auctor placerat. Massa vivamus senectus maecenas penatibus nascetur praesent. Purus semper ridiculus magnis, varius platea nulla purus. Molestie euismod convallis elementum fermentum iaculis eleifend. Interdum dis nec sociosqu platea feugiat aptent. Cras eget elit egestas posuere ac a; orci tellus.' },
  { name: 'Type 2', value: 12, description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris sagittis eleifend mattis conubia, etiam sit luctus facilisi nunc. Laoreet turpis aliquam euismod penatibus cursus sem consequat auctor placerat. Massa vivamus senectus maecenas penatibus nascetur praesent. Purus semper ridiculus magnis, varius platea nulla purus. Molestie euismod convallis elementum fermentum iaculis eleifend. Interdum dis nec sociosqu platea feugiat aptent. Cras eget elit egestas posuere ac a; orci tellus. '},
  { name: 'Type 3', value: 30.1, description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris sagittis eleifend mattis conubia, etiam sit luctus facilisi nunc. Laoreet turpis aliquam euismod penatibus cursus sem consequat auctor placerat. Massa vivamus senectus maecenas penatibus nascetur praesent. Purus semper ridiculus magnis, varius platea nulla purus. Molestie euismod convallis elementum fermentum iaculis eleifend. Interdum dis nec sociosqu platea feugiat aptent. Cras eget elit egestas posuere ac a; orci tellus.' },
  { name: 'Type 4', value: 12, description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris sagittis eleifend mattis conubia, etiam sit luctus facilisi nunc. Laoreet turpis aliquam euismod penatibus cursus sem consequat auctor placerat. Massa vivamus senectus maecenas penatibus nascetur praesent. Purus semper ridiculus magnis, varius platea nulla purus. Molestie euismod convallis elementum fermentum iaculis eleifend. Interdum dis nec sociosqu platea feugiat aptent. Cras eget elit egestas posuere ac a; orci tellus.' },
  { name: 'Type 5', value: 36.1, description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris sagittis eleifend mattis conubia, etiam sit luctus facilisi nunc. Laoreet turpis aliquam euismod penatibus cursus sem consequat auctor placerat. Massa vivamus senectus maecenas penatibus nascetur praesent. Purus semper ridiculus magnis, varius platea nulla purus. Molestie euismod convallis elementum fermentum iaculis eleifend. Interdum dis nec sociosqu platea feugiat aptent. Cras eget elit egestas posuere ac a; orci tellus.' },
];

// Cores para cada parte do gráfico
const COLORS = ['#027ed1', '#ffb6c1', '#38d14a', '#f0e84d', '#f25535'];

const CustomTooltip = ({ active, payload, onClose }) => {
  if (active && payload && payload.length) {
    const { name, value, description } = payload[0].payload;
    return (
      <div style={{
        position: 'relative',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        color: '#333',
        maxWidth: '200px',  // Largura ajustada
        width: '100%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        marginTop: '10px'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          color: '#333',
        }}>
          <FaTimes />
        </button>
        <p><strong>{name}</strong></p>
        <p>Valor: {value}</p>
        <p>{description}</p>
      </div>
    );
  }

  return null;
};
const OurDataSet: React.FC = () => {
  return (
    <Container>
      <Title>Our Dataset</Title>
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
              innerRadius="40%"
              outerRadius="70%"
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip active={undefined} payload={undefined} onClose={undefined} />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Container>
  );
};

export default OurDataSet;
