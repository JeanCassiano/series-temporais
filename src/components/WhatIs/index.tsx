// src/components/WhatIs/index.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WhatIsContainer, Title, Description } from './styles.tsx';
import TimeSeriesChart from '../TimeSeriesChart/index.tsx';

const WhatIs: React.FC = () => {
  return (
    <Container className="mt-5" id="whatis">
      <Row>
        {/* Coluna para o texto "What is..." */}
        <Col md={6}>
          <WhatIsContainer>
            <Title>What is Temporal Analysis?</Title>
            <Description>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi natoque amet quam cursus felis sapien integer. Tincidunt luctus sit sodales at ad fermentum. Nunc congue litora consectetur nisl habitasse vitae consequat leo. Scelerisque vivamus ridiculus leo bibendum faucibus inceptos. Viverra mattis posuere integer fringilla est tincidunt. Nunc ultrices urna commodo montes proin phasellus magna ante.
            </Description>
          </WhatIsContainer>
        </Col>

        {/* Coluna para o card à direita */}
        <Col md={6}>
            <TimeSeriesChart />
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIs;
