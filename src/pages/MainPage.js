import styled from 'styled-components';
import Header from '../components/Header';
import TopContent from '../components/TopContent';
import BottomContent from '../components/BottomContent';

export default function MainPage() {
  return (
    <MainPageContainer>
      <Header />
      <TopContent />
      <BottomContent />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  margin-top: 110px;
  @media (max-width: 600px) {
    margin-top: 57px;
  }
`;
