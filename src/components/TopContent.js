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
  height: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  span {
    font-size: 82px;
    font-weight: bold;
    color: #716565;
    margin-right: 20px;
  }

  img {
    width: 682px;
    height: 335px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: 511px;
    padding: 0 20px;

    span {
      align-self: flex-start;
      font-size: 53px;
      font-weight: bold;
      color: #716565;
    }

    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;
