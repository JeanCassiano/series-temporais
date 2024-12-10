// src/components/WhatIs/styles.tsx
import styled from 'styled-components';

export const WhatIsContainer = styled.div`
  padding: 20px;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #E8E9F3;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left; /* Alinha o título à esquerda */
  color: #027ed1;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: justify;
  color: #e0e0e0;
`;
