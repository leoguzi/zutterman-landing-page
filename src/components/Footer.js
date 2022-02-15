import styled from 'styled-components';
import socialMediaIcons from '../assets/socialMediaIcons.png';

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <FooterContentTitle>Fallow Us</FooterContentTitle>
        <img src={socialMediaIcons} alt='Social media Icons' />
      </SocialMediaContainer>
      <ContactInfoContainer>
        <FooterContentTitle>Contact</FooterContentTitle>
        <span>
          2490 Leisure Lane <br />
          San Luis Obispo <br />
          California
        </span>
      </ContactInfoContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  height: 226px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #716565;

  @media (max-width: 600px) {
    height: 334px;
    flex-direction: column;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 150px 0 100px;
  @media (max-width: 600px) {
    margin: 40px 0 30px 0;
    align-items: center;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(2) {
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 1.2px;
  }
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

const FooterContentTitle = styled.h1`
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 20px;
`;
