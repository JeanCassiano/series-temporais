import React from 'react';
import { HeaderContainer, HeaderTextTitle, TextDiv, ArrowDiv, Highlight } from './styles.tsx';
import { FaCaretDown } from 'react-icons/fa';

interface Props {
  url: string; // Pode ser a chave da imagem ou o caminho da URL
}

const images: Record<string, string> = {
  img1: 'imgs/img1.jpg',
  img2: 'imgs/img2.jpg',
  img3: 'imgs/img3.jpg', 
  img4: 'imgs/img4.jpg'

};

const Header: React.FC<Props> = ({ url }) => {
  // Verifica se a imagem existe no dicionário, caso contrário, usa uma imagem padrão
  const img = images[url] || images['img1'];

  return (
    <HeaderContainer style={{ backgroundImage: `url(${img})`  }}>
      <TextDiv>
        <HeaderTextTitle>
        {url === 'img1' ? (
          <>Welcome to our <Highlight>Temporal Analysis</Highlight></>
        ) : url === 'img2' ? (
          <>Welcome to our <Highlight>Advanced Analysis</Highlight></>
        ) : url === 'img3' ? (
          <>Welcome to our <Highlight>About Page</Highlight></>
        ) : url === 'img4' ? (
          <>Let's explore some <Highlight>Questions</Highlight> About our <Highlight> Database</Highlight></>
        ) : (
          <>Welcome to our <Highlight>Temporal Analysis</Highlight></>
        )}
        </HeaderTextTitle>
        <div style={{ maxWidth: '60vw', fontSize: '1.2rem', lineHeight: '1.6' }}>
          {url === 'img2' ? (
            <>
              Explore in-depth insights on <Highlight>economic trends</Highlight> and <Highlight>forecasting models</Highlight>.
            </>
          ) : url === 'img3' ?(
            <>
              Let's explore a little bit of what our works is <Highlight>ABOUT</Highlight>.
            </>
          ) : url === 'img4' ?(
            <>
              Here we will bring up some <Highlight> questions </Highlight>that we will try to <Highlight> answer </Highlight> for you in the analyses
            </>
          ) : (
            <>
              A temporal analysis of <Highlight>BETS</Highlight>, <Highlight>ipeadata</Highlight>, and <Highlight>deflateBR</Highlight>
            </>
          )}
        </div>
      </TextDiv>
      <ArrowDiv>
        <a href="#whatis"><FaCaretDown className="arrow" /></a>
      </ArrowDiv>
    </HeaderContainer>
  );
};

export default Header;
