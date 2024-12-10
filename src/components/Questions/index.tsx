import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import {Title} from './styles.tsx';

const images: Record<string, string> = {
  img1: "imgs/q1.png",
  img2: "imgs/q2.png",
  img3: "imgs/q3.png",
  img4: "imgs/q4.png",
};

const QuestionsCarousel: React.FC = () => {
  const questions = [
    {
      id: 1,
      question:
        "Qual é a tendência de longo prazo da taxa de câmbio no Brasil em relação ao dólar americano?",
      description:
        "Para identificação de tendências, utilizamos da análise de regressão em nossa série temporal de câmbio de modo a revelar a significância estatística da desvalorização da taxa de câmbio do real em relação ao dólar americano ao longo do tempo, o que pode refletir fatores econômicos, políticos e sociais que afetam a economia brasileira.",
      chart: images.img1,
    },
    {
      id: 2,
      question: "A série temporal de câmbio apresenta alguma tendência ao longo do tempo, indicada por autocorrelações significativas em defasagens mais longas?",
      description:
        "A defasagem 1 apresenta uma autocorrelação ligeiramente significativa, enquanto as outras defasagens estão dentro da faixa de confiança e não são significativamente diferentes de zero. Isso significa que há uma relação entre o valor atual da série de câmbio e o valor imediatamente anterior. Isso pode sugerir que o valor atual é influenciado pelo valor do período anterior, mas não necessariamente implica uma tendência de longo prazo",
      chart: images.img2,
    },
    {
      id: 3,
      question: "Quais períodos presidenciais registraram as maiores flutuações na taxa de câmbio, e quais fatores econômicos estavam associados a essas mudanças?",
      description:
        "Para responder essa pergunta, iremos olhar para a volatilidade da série, que indica a intensidade e a frequência das flutuações. Uma alta volatilidade sugere grandes e frequentes mudanças na taxa de câmbio, enquanto uma baixa volatilidade indica mudanças menores e menos frequentes. Os períodos presidenciais de José Sarney (1985-1990) e Fernando Collor (1990-1992) registraram as maiores flutuações na taxa de câmbio. Esses períodos foram marcados por tentativas de estabilização econômica, como o Plano Cruzado e o Plano Collor, além de hiperinflação e instabilidade política. Outros períodos foram influenciados por crises financeiras internacionais, crescimento econômico, recessão, pandemia de COVID-19 e instabilidade política.",
      chart: images.img3,
    },
    {
      id: 4,
      question: "Qual é a tendência geral da taxa de desemprego ao longo do período analisado?",
      description:
        "Podemos observar uma tendência geral de queda ao longo do período analisado. No início do período, a taxa de desemprego estava em torno de 13%, e ao final do período, a taxa caiu para cerca de 7%. Essa tendência de queda é visível na série temporal, onde observamos uma diminuição gradual com algumas flutuações ao longo do tempo. Para mesurar essa tendência, ajustamos uma regressão linear, onde obtivemos uma inclinação negativa que indica que, em média, a taxa de desemprego diminui em aproximadamente 0.00157% a cada mês, com um p-valor próximo a 0 e um R2 de aproximadamente 0.84, indicam a significância e a qualidade do ajuste do modelo",
      chart: images.img4,
    },
  ];

  return (
    <Container className="mt-5" id="questions">

        <Title> Some Questions about our Dataset </Title>
      <Carousel
        variant="white"
        style={{ marginTop: "100px",position: "relative", paddingBottom: "100px" }} 
        prevIcon={
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              transform: "scale(1.5)", // Aumenta o tamanho do ícone
              marginLeft: "-400px", // Espaça o botão para a esquerda
            }}
          />
        }
        nextIcon={
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              transform: "scale(1.5)", // Aumenta o tamanho do ícone
              marginRight: "-400px", // Espaça o botão para a direita
            }}
          />
        }
      >
        {questions.map((item) => (
          <Carousel.Item key={item.id}>
            <Row>
              <Col md={6}>
                <div>
                  <h3>{item.question}</h3>
                  <p>{item.description}</p>
                </div>
              </Col>
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <img
                  src={item.chart}
                  alt={`Graph for question ${item.id}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default QuestionsCarousel;
