import { useState } from 'react';
import styled from 'styled-components';
import { ContentItem } from '../../types';
import Modal from './Modal';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px 40px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Card = styled.div`
  cursor: pointer;
  transition: opacity 0.3s ease;
  outline: 2px solid transparent;

  &:hover {
    opacity: 0.7;
    outline: 2px solid white;
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
`;

const CardTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;

interface ContentListProps {
  items: ContentItem[];
}

const ContentList = ({ items }: ContentListProps) => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  return (
    <>
      <ListContainer>
        {items.map((item, index) => (
          <Card key={index} onClick={() => setSelectedItem(item)}>
            <CardImage src={item.images['Poster Art'].url} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </ListContainer>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
};

export default ContentList;
