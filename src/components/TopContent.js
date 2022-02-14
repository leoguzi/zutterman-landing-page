import styled from 'styled-components';
import RolledTapeImage from '../assets/img1.png';

export default function TopContent() {
  return (
    <ContentContainer>
      <span>
        Measuring <br /> everything
      </span>
      <img src={RolledTapeImage} alt='Rolled tape' />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  height: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 82px;
    font-weight: bold;
    color: #716565;
  }

  img {
    width: 682px;
    height: 335px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    width: 100%;
    height: 300px;

    span {
      font-size: 53px;
      font-weight: bold;
      color: #716565;
    }

    img {
      max-width: 285px;
      max-height: 140px;
    }
  }
`;
