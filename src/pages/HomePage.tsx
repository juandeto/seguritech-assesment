import styled from 'styled-components';
import SubHeader from '../components/common/SubHeader';
import ContentCard from '../components/common/ContentCard';
const HomeContainer = styled.div``;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <SubHeader title="Popular Titles" />
      <CardsContainer>
        <ContentCard
          title="SERIES"
          caption="Popular Series"
          to="/series?page=1&pageSize=20"
        />
        <ContentCard
          title="MOVIES"
          caption="Popular Movies"
          to="/movies?page=1&pageSize=20"
        />
      </CardsContainer>
    </HomeContainer>
  );
};

export default HomePage;
