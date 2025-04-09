import styled from 'styled-components';

const SubHeaderContainer = styled.div`
  background-color: #414141;
  color: white;
  padding: 15px 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <SubHeaderContainer>
      <Title>{title}</Title>
    </SubHeaderContainer>
  );
};

export default SubHeader;
