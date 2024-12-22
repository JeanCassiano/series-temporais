import React, { useState } from "react";
import { Container } from "./styles.tsx";
import Header from "../../components/Header/index.tsx";
import Navbar from "../../components/Navbar/index.tsx";
import Footer from "../../components/Footer/index.tsx";
import Contact from "../../components/Contact/index.tsx";
import TimeSeriesChart from "../../components/TimeSeries/index.tsx";
import TimeSeriesSummary from "../../components/Summary/index.tsx";
import TimeSeriesPatterns from "../../components/Patterns/index.tsx";
import TimeSeriesStationary from "../../components/Stationary/index.tsx";
import TimeSeriesACF from "../../components/ACF/index.tsx";
import TimeSeriesPACF from "../../components/PACF/index.tsx";
import TimeSeriesAutoARIMA from "../../components/AutoArima/index.tsx";
import TimeSeriesARIMA from "../../components/Arima/index.tsx";
import TimeSeriesSARIMA from "../../components/SARIMA/index.tsx"; 
import TimeSeriesProphet from "../../components/Prophet/index.tsx";

const Analysis: React.FC = () => {
  const [seriesId, setSeriesId] = useState('ABATE12_ABPEVA12');
  const [viewMode, setViewMode] = useState('chart');
  const [arimaParams, setArimaParams] = useState({ p: 1, d: 1, q: 1 });
  const [sarimaParams, setSarimaParams] = useState({ p: 1, d: 1, q: 1, P: 0, D: 1, Q: 0, s: 12 });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeriesId(event.target.value);
  };

  const handleArimaParamsChange = (param: 'p' | 'd' | 'q', value: string) => {
    setArimaParams(prev => ({ ...prev, [param]: parseInt(value) }));
  };

  const handleSarimaParamsChange = (param: keyof typeof sarimaParams, value: string) => {
    setSarimaParams(prev => ({ ...prev, [param]: parseInt(value) }));
  };

  const handleViewChange = (mode: string) => {
    setViewMode(mode);
  };

  return (
    <Container>
      <Header url="img2" />
      <Navbar />

      <input
        type="text"
        value={seriesId}
        onChange={handleInputChange}
        placeholder="Enter Series ID"
        style={{ marginTop: '20px' }}
      />
      <div>
        <button onClick={() => handleViewChange('chart')}>View Time Series</button>
        <button onClick={() => handleViewChange('summary')}>View Summary</button>
        <button onClick={() => handleViewChange('patterns')}>View Patterns</button>
        <button onClick={() => handleViewChange('stationary')}>View Stationary Test</button>
        <button onClick={() => handleViewChange('acf')}>View ACF</button>
        <button onClick={() => handleViewChange('pacf')}>View PACF</button>
        <button onClick={() => handleViewChange('autoarima')}>View AutoARIMA</button>
        <button onClick={() => handleViewChange('arima')}>View ARIMA</button>
        <button onClick={() => handleViewChange('sarima')}>View SARIMA</button> 
        <button onClick={() => handleViewChange('prophet')}>View Prophet</button>
      </div>

      {viewMode === 'arima' && (
        <>
          <label>
            p (Autoregressive lags):
            <input type="number" value={arimaParams.p} onChange={(e) => handleArimaParamsChange('p', e.target.value)} placeholder="p" />
          </label>
          <label>
            d (Degree of differencing):
            <input type="number" value={arimaParams.d} onChange={(e) => handleArimaParamsChange('d', e.target.value)} placeholder="d" />
          </label>
          <label>
            q (Moving average windows):
            <input type="number" value={arimaParams.q} onChange={(e) => handleArimaParamsChange('q', e.target.value)} placeholder="q" />
          </label>
          <TimeSeriesARIMA id={seriesId} p={arimaParams.p} d={arimaParams.d} q={arimaParams.q} />
        </>
      )}

{viewMode === 'sarima' && (
        <>
          <label>
            p (Autoregressive lags):
            <input type="number" value={sarimaParams.p} onChange={(e) => handleSarimaParamsChange('p', e.target.value)} placeholder="p" />
          </label>
          <label>
            d (Degree of differencing):
            <input type="number" value={sarimaParams.d} onChange={(e) => handleSarimaParamsChange('d', e.target.value)} placeholder="d" />
          </label>
          <label>
            q (Moving average windows):
            <input type="number" value={sarimaParams.q} onChange={(e) => handleSarimaParamsChange('q', e.target.value)} placeholder="q" />
          </label>
          <label>
            P (Seasonal autoregressive lags):
            <input type="number" value={sarimaParams.P} onChange={(e) => handleSarimaParamsChange('P', e.target.value)} placeholder="P" />
          </label>
          <label>
            D (Seasonal differencing):
            <input type="number" value={sarimaParams.D} onChange={(e) => handleSarimaParamsChange('D', e.target.value)} placeholder="D" />
          </label>
          <label>
            Q (Seasonal moving average windows):
            <input type="number" value={sarimaParams.Q} onChange={(e) => handleSarimaParamsChange('Q', e.target.value)} placeholder="Q" />
          </label>
          <label>
            s (Seasonal period):
            <input type="number" value={sarimaParams.s} onChange={(e) => handleSarimaParamsChange('s', e.target.value)} placeholder="s" />
          </label>
          <TimeSeriesSARIMA id={seriesId} params={sarimaParams} />
        </>
      )}

      {viewMode === 'chart' && <TimeSeriesChart id={seriesId} />}
      {viewMode === 'summary' && <TimeSeriesSummary id={seriesId} />}
      {viewMode === 'patterns' && <TimeSeriesPatterns id={seriesId} />}
      {viewMode === 'stationary' && <TimeSeriesStationary id={seriesId} />}
      {viewMode === 'acf' && <TimeSeriesACF id={seriesId} />}
      {viewMode === 'autoarima' && <TimeSeriesAutoARIMA id={seriesId} />}
      {viewMode === 'prophet' && <TimeSeriesProphet id={seriesId} />}
      {viewMode === 'pacf' && <TimeSeriesPACF id={seriesId} />}
      <Contact />
      <Footer />
    </Container>
  );
};

export default Analysis;
