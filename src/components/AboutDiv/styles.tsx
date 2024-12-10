import styled from "styled-components";
import dark from "../../GlobalStyles/dark.tsx";
export const AboutContainer = styled.div`
  padding: 30px;
  background-color: ${dark.background};
  border-radius: 10px;
  margin: 40px;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #027ed1;
  border-bottom: 2px solid #027ed1;
  padding-bottom: 10px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
  color: #027ed1; 
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
  color: #e0e0e0;
  margin-bottom: 20px;
`;

export const Highlight = styled.span`
  color: #027ed1; 
  font-weight: bold;
`;
