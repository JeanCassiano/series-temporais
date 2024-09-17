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
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida ipsum sollicitudin litora faucibus taciti ultrices. Nostra ac volutpat senectus lorem maecenas. Viverra vivamus leo ad etiam litora etiam volutpat donec. Ac class ad gravida; tellus justo facilisis dolor. Suscipit netus suspendisse inceptos senectus at ipsum ut. Sollicitudin accumsan sodales vivamus ligula, sociosqu consectetur. Nulla vulputate lobortis donec turpis senectus dolor; nec finibus sem.
              <p></p>
              Ante eu vehicula parturient malesuada; maecenas nam pretium. Tempus felis facilisis cras felis parturient dis sodales urna imperdiet. Felis tortor ligula sociosqu pharetra pretium mauris consequat. Nullam luctus magnis orci vitae sed, ultrices fringilla. Phasellus fusce enim vestibulum condimentum quis efficitur nunc. Euismod venenatis integer turpis sapien justo nisl eleifend ante velit. Convallis dui dignissim convallis vitae semper posuere erat inceptos. Sapien mattis cursus leo mollis convallis urna scelerisque. Cursus mus malesuada integer porttitor varius tempus luctus.
            </Description>
          </WhatIsContainer>
        </Col>

        {/* Coluna para o card à direita */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <TimeSeriesChart />
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIs;
