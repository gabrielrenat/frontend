import { CurtirProps } from "interface/style.interface"
import styled, { css } from "styled-components"
import { colors } from "styles/GlobalStyle"
import imagem01 from "assets/img/imagem.jpg"

export const Main = styled.main`
  background:url(${imagem01}) no-repeat;
  background-size: 1024px 900px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: auto;
  }
  div.layout {
    width: 100%;
    background: rgba(190, 0, 0, 0.3);
    height: 100vh;
  }
  div.curtida {
    display: flex;
  }
  aside{
    img{
      width: 30rem;
    }
  }
`

const colorVariations = {
  default: css`
    color: ${colors.white};
  `,
  curtir: css`
    color: ${colors.red};
  `
}



export const Button = styled.button<CurtirProps>`
  cursor: pointer;
  margin: 0 0.2rem;
  display: flex;
  background-color: transparent;
  border: 0;
  
  ${(props) => colorVariations[props.color || "default"]}
`