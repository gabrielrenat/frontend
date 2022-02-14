import * as S from "./styles";
//import instaFace from "assets/img/instaFace.svg";

const Footer = () => {
  return (
    <S.Footer>
      <div>&copy; CopyLeft</div>
      <div>Saiba Mais</div>
      <div>Contato</div>
      <div>Quem Somos?</div>
      <picture>
        <S.A href="https://facebook.com" target="_blank">
          {/*<img src={instaFace} alt="Instagram e Facebook" /> */}
        </S.A>
      </picture>
    </S.Footer>
  );
};

export default Footer;