import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Table } from 'semantic-ui-react'; // Assumindo que você tem Semantic UI
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface SummaryProps {
  id: string;
}

interface Statistic {
  count: number;
  mean?: number;
  std?: number;
  min?: number;
  max?: number;
  "25%"?: number;
  "50%"?: number;
  "75%"?: number;
}

const TimeSeriesSummary: React.FC<SummaryProps> = ({ id }) => {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`https://api-series-temporais-production-2007.up.railway.app/time-series/summary?id=${id}`);
        setSummary(response.data.summary);
      } catch (error) {
        console.error('Erro ao buscar dados do sumário:', error);
      }
    };

    fetchSummary();
  }, [id]);

  if (!summary) {
    return <div>Loading...</div>;
  }

  const formatStatistic = (stat: Statistic) => [
    stat.count,
    stat.mean?.toFixed(2) || '',
    stat.std?.toFixed(2) || '',
    stat.min?.toFixed(2) || '',
    stat.max?.toFixed(2) || '',
  ];

  // Preparar dados para o gráfico, se necessário
  const chartData = Object.keys(summary).filter(key => key.includes("YEAR") || key.includes("MONTH")).map(key => ({
    name: key,
    count: summary[key].count,
    mean: summary[key].mean,
    std: summary[key].std,
    min: summary[key].min,
    max: summary[key].max,
  }));

  return (
    <div>
      <h2>Summary Statistics for ID: {id}</h2>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Metric</Table.HeaderCell>
            <Table.HeaderCell>Count</Table.HeaderCell>
            <Table.HeaderCell>Mean</Table.HeaderCell>
            <Table.HeaderCell>Std</Table.HeaderCell>
            <Table.HeaderCell>Min</Table.HeaderCell>
            <Table.HeaderCell>Max</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.entries(summary).map(([key, value]) => (
            <Table.Row key={key}>
              <Table.Cell>{key}</Table.Cell>
              {formatStatistic(value as Statistic).map((text, index) => (
                <Table.Cell key={index}>{text}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {/* Apenas exibir o gráfico se tiver dados relevantes */}
      {chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" name="Count" />
            <Bar dataKey="mean" fill="#82ca9d" name="Mean" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TimeSeriesSummary;
