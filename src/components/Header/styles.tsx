import styled, {keyframes} from 'styled-components';


const rotate = keyframes`
  0%{
      transform:translateY(0px);
  }

  60%{
    transform:translateY(0px);
  }

  70%{
    transform:translateY(10px);
  }
  80%{
    transform:translateY(0px);
  }
  90%{
    transform:translateY(10px);
  }
  100%{
    transform:translateY(0px);
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  scroll-snap-align: center;
  position: relative;
  left: 0%;
`;

export const HeaderTextTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  text-align: left;
`;

export const Highlight = styled.span`
  color: #027ed1; /* Cor de destaque para algumas palavras */
`;

export const TextDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 5%;
`;

export const ArrowDiv = styled.div`
    width:100%;

    position:absolute;
    bottom:0;

    display:flex;
    justify-content: center;

    font-size: 7rem;

    .arrow{
        color:white;
        animation:${rotate} 2s infinite;
        transition: color 0.3s ease-in;
        &:hover{
          color: rgb(238, 9, 121, 0.8);
        }
    }


`;