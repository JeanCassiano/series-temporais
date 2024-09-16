import React from 'react';
import { HeaderContainer, HeaderTextTitle, TextDiv, ArrowDiv, Highlight } from './styles.tsx';
import {FaCaretDown} from 'react-icons/fa';
interface Props {
  url: string; // Pode ser a chave da imagem ou o caminho da URL
}

const images: Record<string, string> = {
  img1: 'imgs/backgrouond-home.jpg', // Verifique se o caminho da imagem está correto
  img2: '/path/to/your/img2.png', // Adicione o caminho para a imagem 2
  // Você pode adicionar mais imagens aqui conforme necessário
};

const Header: React.FC<Props> = ({url }) => {
  // Verifica se a imagem existe no dicionário, caso contrário, usa uma imagem padrão
  const img = images[url] || images['img1'];

  return (
    
    <HeaderContainer style={{ backgroundImage: `url(${img})` }}>
      <TextDiv>
        <HeaderTextTitle>
          Welcome to our <Highlight>Temporal Analysis</Highlight>
        </HeaderTextTitle>
        <div style={{ maxWidth: '60vw', fontSize: '1.2rem', lineHeight: '1.6' }}>
          A temporal analysis of <Highlight>BETS</Highlight>, <Highlight>ipeadata</Highlight> and <Highlight>deflateBR</Highlight>
        </div>
      </TextDiv>
      <ArrowDiv>
      <a href = "#whatis"><FaCaretDown className="arrow"/></a>
      </ArrowDiv>
    </HeaderContainer>
  );
};

export default Header;
