import styled from "styled-components"
import { colors } from "styles/GlobalStyle"
import imagem01 from "assets/img/imagem.jpg"

export const Main = styled.main`
  background:url(${imagem01}) no-repeat;
  background-size: 1024px 900px;
  ol {
    margin: 1rem;
    li {
      a {
        text-decoration: none;
        color: ${colors.black};
      }
      &:hover {
        background-color: ${colors.gray};
      }
    }
  }
  div.layout {
    width: 100%;
    background: rgba(190, 0, 0, 0.3);
    height: 100vh;
  }
`
export const Faq = styled.div`
  height: 100vh;
  h4 {
    margin: 2rem 0;
  }
  a {
    display: block;
    text-decoration: none;
    color: ${colors.black};
    margin-top: 2rem;
    &:hover {
      background-color: ${colors.gray};
    }
  }
`