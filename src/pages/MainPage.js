import styled from 'styled-components';
import Header from '../components/Header';
import TopContent from '../components/TopContent';

export default function MainPage() {
  return (
    <MainPageContainer>
      <Header />
      <TopContent />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  margin-top: 110px;
`;
