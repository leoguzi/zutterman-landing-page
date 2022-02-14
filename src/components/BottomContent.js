import styled from 'styled-components';
import Tape from '../assets/img2.png';

export default function BottomContent() {
  return (
    <ContentContainer>
      <TextContainer>
        <span>We are Leader in measure Tapes</span>
        <span>
          There are 5x the circumference of planet earth in metric tapes.
        </span>
      </TextContainer>
      <img src={Tape} alt='Measuring Tape' />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  background-color: #506fa9;
  height: 1024px;
  margin: 0 auto;
  color: #ffffff;
  position: relative;

  img {
    width: 100%;
    max-width: 1038px;
    max-height: 689px;
    position: absolute;
    right: 0;
    top: 0;
    filter: brightness(50%);
  }

  @media (max-width: 600px) {
    padding: 0 20px;
    height: 511px;
    width: 100%;
    align-items: flex-start;

    img {
      max-width: 259px;
      height: 172px;
      top: 300px;
    }
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 50px;
  display: flex;
  flex-direction: column;
  max-width: 488px;

  span:first-child {
    font-size: 69px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  span:nth-child(2) {
    font-size: 48px;
    font-weight: lighter;
  }

  @media (max-width: 600px) {
    margin-top: 60px;
    top: 25px;
    left: 20px;
    span:first-child {
      font-size: 41.2px;
    }

    span:nth-child(2) {
      width: 280px;
      font-size: 26px;
      line-height: 1.3;
    }
  }
`;
