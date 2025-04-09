import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  background-color: #1E1E1E;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
    border: 2px solid white;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const Caption = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ContentCardProps {
  title: string;
  caption: string;
  to: string;
}

const ContentCard = ({ title, caption, to }: ContentCardProps) => {
  return (
    <CardContainer>
      <Card to={to}>
        <Title>{title}</Title>
      </Card>
      <Caption>{caption}</Caption>
    </CardContainer>
  );
};

export default ContentCard;
