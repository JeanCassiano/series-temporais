import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { Container } from "./styles.tsx";
import Header from "../../components/Header/index.tsx";
import Navbar from "../../components/Navbar/index.tsx";
import Footer from "../../components/Footer/index.tsx";
const Analysis: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string[]>([
    "Série 1",
    "Série 2",
  ]);

  // Estado para as datas de início e fim
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Funções para atualizar as datas
  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(event.target.value));
  };

  // Dados de exemplo com anotações
  const data = [
    {
      series: "Série 1",
      values: [
        { date: new Date(2024, 0, 1), value: 30, annotation: "Primeiro valor de Série 1" },
        { date: new Date(2024, 1, 1), value: 50, annotation: "Valor intermediário Série 1" },
        { date: new Date(2024, 2, 1), value: 80, annotation: "Valor alto Série 1" },
        { date: new Date(2024, 3, 1), value: 65, annotation: "Queda em Série 1" },
        { date: new Date(2024, 4, 1), value: 90, annotation: "Pico em Série 1" },
      ],
    },
    {
      series: "Série 2",
      values: [
        { date: new Date(2024, 0, 1), value: 40, annotation: "Primeiro valor de Série 2" },
        { date: new Date(2024, 1, 1), value: 45, annotation: "Valor intermediário Série 2" },
        { date: new Date(2024, 2, 1), value: 70, annotation: "Valor alto Série 2" },
        { date: new Date(2024, 3, 1), value: 55, annotation: "Queda em Série 2" },
        { date: new Date(2024, 4, 1), value: 85, annotation: "Pico em Série 2" },
      ],
    },
  ];

  useEffect(() => {
    d3.select("#chart").selectAll("*").remove();
    drawChart();
  }, [selectedSeries, startDate, endDate]);

  const drawChart = () => {
    const filteredData = data.filter((d) => selectedSeries.includes(d.series));

    // Filtrar dados com base no intervalo de datas
    const filteredDataByDate = filteredData.map((serie) => ({
      ...serie,
      values: serie.values.filter((d) => {
        const date = d.date;
        if (startDate && date < startDate) return false;
        if (endDate && date > endDate) return false;
        return true;
      }),
    }));

    // Encontrar os limites de data e valor para ajustar os eixos
    const allValues = filteredDataByDate.flatMap((serie) => serie.values);
    const xDomain = d3.extent(allValues, (d) => d.date);
    const yDomain = [0, d3.max(allValues, (d) => d.value) || 100];

    const width = 600;
    const height = 400;
    const margin = { top: 50, right: 100, bottom: 50, left: 50 };

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleTime().domain(xDomain as [Date, Date]).range([0, width]);
    const y = d3.scaleLinear().domain(yDomain as [number, number]).range([height, 0]);

    // Adicionando eixos com legendas pretas
    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("fill", "black");

    g.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("fill", "black");

    const line = d3
      .line()
      .x((d: any) => x(d.date))
      .y((d: any) => y(d.value))
      .curve(d3.curveMonotoneX);

    // Criando ou atualizando o tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background", "#f4f4f4")
      .style("padding", "10px")
      .style("border-radius", "5px")
      .style("box-shadow", "0px 4px 8px rgba(0, 0, 0, 0.2)");

    filteredDataByDate.forEach((serie, index) => {
      g.append("path")
        .datum(serie.values)
        .attr("fill", "none")
        .attr("stroke", index === 0 ? "steelblue" : "orange")
        .attr("stroke-width", 2)
        .attr("d", line);

      // Adicionando pontos de dados
      g.selectAll(`.circle-${index}`)
        .data(serie.values)
        .enter()
        .append("circle")
        .attr("cx", (d: any) => x(d.date))
        .attr("cy", (d: any) => y(d.value))
        .attr("r", 5)
        .attr("fill", index === 0 ? "blue" : "orange")
        .on("mouseover", (event: MouseEvent, d: any) => {
          tooltip.transition().duration(200).style("opacity", 1);
          tooltip
            .html(
              `<strong>Data:</strong> ${d.date.toDateString()}<br/><strong>Valor:</strong> ${
                d.value
              }<br/><strong>Anotação:</strong> ${d.annotation}`
            )
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 30}px`)
            .style("background", "black")
            .style("color", "white");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(200).style("opacity", 0);
        });
    });

    // Adicionando a legenda com o nome das séries
    const legend = g
      .append("g")
      .attr("transform", `translate(${width + 10}, 0)`);

    legend
      .selectAll("rect")
      .data(filteredData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 25)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", (d, i) => (i === 0 ? "steelblue" : "orange"));

    legend
      .selectAll("text")
      .data(filteredData)
      .enter()
      .append("text")
      .attr("x", 30)
      .attr("y", (d, i) => i * 25 + 15)
      .text((d) => d.series)
      .attr("fill", "black")
      .style("font-size", "12px");

    // Adicionando zoom e pan ao grupo "g"
    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 5])
      .translateExtent([
        [-100, -100],
        [width + 100, height + 100],
      ])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Adicionando o botão de resetar zoom
    d3.select("#reset-zoom").on("click", () => {
      svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
    });
  };

  const handleSeriesChange = (series: string) => {
    if (selectedSeries.includes(series)) {
      setSelectedSeries(selectedSeries.filter((s) => s !== series));
    } else {
      setSelectedSeries([...selectedSeries, series]);
    }
  };

  return (
    <Container>
      <Header url="img2" />
      <Navbar />
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <h2>Análise de Série Temporal</h2>
        
        {/* Campos de data para o usuário escolher o intervalo */}
        <div>
          <label>Data de Início: </label>
          <input type="date" onChange={handleStartDateChange} />
          
          <label style={{ marginLeft: '10px' }}>Data de Fim: </label>
          <input type="date" onChange={handleEndDateChange} />
        </div>

        {/* Checkbox para selecionar as séries */}
        <div>
          {data.map((serie) => (
            <label key={serie.series} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={selectedSeries.includes(serie.series)}
                onChange={() => handleSeriesChange(serie.series)}
              />
              {serie.series}
            </label>
          ))}
        </div>

        {/* Gráfico */}
        <div id="chart"></div>

        {/* Botão de resetar zoom */}
        <button id="reset-zoom" style={{ marginTop: "20px" }}>
          Resetar Zoom
        </button>
      </div>
      <Footer/>
    </Container>
  );
};

export default Analysis;
