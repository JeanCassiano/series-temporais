import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: transparent;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color:  #027ed1;
;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  @media (max-width: 768px) {
    margin-top: -75px;
  } 
`;

export const Content = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente os itens */
  align-items: center; /* Centraliza verticalmente os itens */
  max-width: 800px; /* Limita a largura total */
  width: 100%;
  padding: 20px;
  flex-direction: column; /* Empilha os itens em telas menores */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os elementos no eixo horizontal */
  width: 100%; /* Ocupar toda a largura do Content */
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px; /* Espaçamento entre os campos */
  width: 100%;
  max-width: 600px; /* Limita a largura máxima do formulário */
`;

export const Input = styled.input`
  width: 100%; /* Ocupa toda a largura disponível */
  padding: 15px; /* Aumenta o espaço interno */
  border: 2px solid #027ed1;
  border-radius: 10px; /* Arredondamento mais pronunciado */
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem; /* Texto maior */
  outline: none;
  box-shadow: 
      5px 5px rgba(2, 126, 209, 0.4), 
      10px 10px rgba(2, 126, 209, 0.3),
      15px 15px rgba(2, 126, 209, 0.2);
  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #00e6e6; /* Destaque no foco */
  }
`;

export const TextArea = styled.textarea`
  width: 100%; /* Ocupa toda a largura disponível */
  padding: 15px; /* Aumenta o espaço interno */
  border: 2px solid #027ed1; /* Torna as bordas mais visíveis */
  border-radius: 10px; /* Arredondamento mais pronunciado */
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem; /* Texto maior */
  outline: none;
  resize: none;
  min-height: 150px; /* Torna o campo de texto maior */
  box-shadow: 
      5px 5px rgba(2, 126, 209, 0.4), 
      10px 10px rgba(2, 126, 209, 0.3),
      15px 15px rgba(2, 126, 209, 0.2);

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #00e6e6; /* Destaque no foco */
  }
`;

export const Button = styled.button`
  width: 100%; /* Botão ocupa toda a largura disponível */
  max-width: 250px; /* Define um limite máximo maior */
  padding: 15px 20px; /* Aumenta o espaço interno */
  border: none;
  margin-top: 20px;
  border-radius: 10px; /* Arredondamento maior */
  background-color: white;
  color: #000;
  font-size: 1.2rem; /* Texto maior */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s ease;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 
      5px 5px rgba(255, 255, 255, 0.4), 
      10px 10px rgba(255, 255, 255, 0.3),
      15px 15px rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: #027ed1;
    box-shadow: 
      5px 5px rgba(2, 126, 209, 0.4), 
      10px 10px rgba(2, 126, 209, 0.3),
      15px 15px rgba(2, 126, 209, 0.2);
    transform: translateY(-10px);
}

`;
