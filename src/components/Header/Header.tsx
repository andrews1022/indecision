// styled components
import * as S from "./Header.styles";
import { Container } from "../UI/Container";

const Header = () => (
  <S.Header>
    <Container>
      <S.Title>Indecision</S.Title>

      <S.SubTitle>Put your life in the hands of a computer!</S.SubTitle>
    </Container>
  </S.Header>
);

export default Header;
