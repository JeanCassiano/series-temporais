import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap

const TimeSeriesChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animação apenas uma vez
    threshold: 0.1, // Quando 10% do elemento estiver visível
  });

  // Estado para controlar o progresso da animação
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Exemplo de animação de série temporal
    const data = [
      {
        color: 'red',
        points: [
          10, 20, 50, 30, 70, 40, 60, 80, 90, 55, 65, 85, 45, 35, 25, 75, 95, 100, 70, 60, 50, 40, 30, 20, 10,
          15, 25, 35, 45, 55, 65, 75, 85, 95, 60, 40, 20, 80, 90, 100, 70, 30, 60, 40, 50, 30, 90, 20, 70, 40,
          50, 80, 30, 100, 20, 60, 40, 70, 90, 50, 30, 80, 100, 25, 45, 65, 85, 55, 35, 15, 5, 75
        ]
      },
      {
        color: 'green',
        points: [
          20, 40, 30, 60, 50, 80, 70, 90, 100, 75, 65, 85, 55, 35, 45, 25, 95, 85, 65, 55, 45, 35, 25, 15, 5,
          10, 30, 50, 70, 90, 60, 40, 20, 80, 100, 95, 75, 55, 35, 15, 85, 65, 45, 25, 5, 30, 70, 50, 10, 20,
          60, 100, 40, 80, 55, 35, 15, 75, 95, 85, 65, 45, 25, 5, 90, 10, 30, 50, 70, 80, 60, 40, 20
        ]
      },
      {
        color: 'cyan',
        points: [
          30, 50, 20, 40, 70, 30, 60, 100, 80, 45, 65, 85, 95, 75, 55, 35, 25, 15, 5, 25, 35, 45, 55, 65, 75,
          85, 95, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 25, 15, 35, 75, 55, 45, 65, 85, 95, 100, 80, 90,
          60, 70, 50, 40, 20, 10, 30, 15, 45, 35, 65, 25, 55, 85, 75, 95, 100, 60, 50, 40, 20, 30, 10, 5, 25
        ]
      },
    ];

    const drawGraph = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar linhas de grade
      ctx.beginPath();
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 5; i++) {
        const y = (i / 5) * canvas.height;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Desenhar os eixos X e Y
      ctx.beginPath();
      ctx.strokeStyle = '#ffffff'; // Cor dos eixos
      ctx.lineWidth = 2;

      // Eixo Y
      ctx.moveTo(30, 0);
      ctx.lineTo(30, canvas.height);
      ctx.stroke();

      // Eixo X
      ctx.moveTo(0, canvas.height - 30);
      ctx.lineTo(canvas.width, canvas.height - 30);
      ctx.stroke();

      // Label dos eixos
      ctx.font = '16px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('f(t)', 5, 20); // Label para o eixo Y
      ctx.fillText('t', canvas.width - 20, canvas.height - 5); // Label para o eixo X

      // Desenhar as séries temporais
      data.forEach((series) => {
        ctx.beginPath();
        ctx.strokeStyle = series.color;
        ctx.lineWidth = 3; // Linha mais grossa
        const totalPoints = series.points.length;
        const visiblePoints = Math.floor((progress / 100) * totalPoints); // Calcula quantos pontos estão visíveis

        series.points.slice(0, visiblePoints).forEach((point, i) => {
          const x = 30 + (i / (series.points.length - 1)) * (canvas.width - 40); // Ajuste de 30 px para o eixo Y
          const y = canvas.height - 30 - (point / 100) * (canvas.height - 40); // Ajuste de 30 px para o eixo X
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });

        ctx.stroke();
      });
    };

    const render = () => {
      drawGraph(); // Chamar a função drawGraph para renderizar o gráfico
    };

    if (inView) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1; // Aumenta a progressão suavemente
          if (newProgress > 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
        render(); // Atualiza o gráfico a cada iteração
      }, 50); // Animação mais suave com intervalos menores

      return () => clearInterval(interval);
    }
  }, [inView, progress]);

  return (
    <div ref={ref} className="card bg-dark text-white" style={{ width: '100%', marginBottom: '20px', marginTop: '40px' }}>
      <div className="card-body">
        <h5 className="card-title">Just a sample of what we will cover</h5>
        <div className="d-flex justify-content-center">
          <canvas ref={canvasRef} width={600} height={400} style={{ background: 'transparent' }} />
        </div>
      </div>
    </div>
  );
};

export default TimeSeriesChart;
