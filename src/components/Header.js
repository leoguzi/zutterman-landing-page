import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import LogoImage from '../assets/logo.png';

export default function Header() {
  return (
    <HeaderContainer>
      <ThreeDotsIcon />
      <LogoContainer>
        <Logo src={LogoImage} alt='Zutterman Logo' />
        <TextContainer>
          <h1>zutterman</h1>
          <h2>Measure Tapes</h2>
        </TextContainer>
      </LogoContainer>
      <Menu>
        <ul>
          <li>ABOUT US</li>
          <li>MODELS</li>
          <li>GUARANTEE</li>
        </ul>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 110px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 50px;
  color: #846219;
  @media (max-width: 600px) {
    justify-content: center;
    height: 57px;
  }
`;

const ThreeDotsIcon = styled(BsThreeDotsVertical)`
  position: absolute;
  font-size: 24px;
  left: 20px;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-left: 30px;

  h1 {
    font-weight: bold;
    font-size: 41px;
  }
  h2 {
    font-size: 16;
    letter-spacing: 5.4px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const Menu = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin-left: 50px;
    letter-spacing: 5.4px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
