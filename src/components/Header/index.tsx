import * as S from "./styles";
//import logo from "assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <picture>
        <Link to="/">
          {/*<img src={logo} alt="Logo do site" />*/}
        </Link>
      </picture>
      <h1>Loja de Games</h1>
    </S.Header>
  );
};

export default Header;