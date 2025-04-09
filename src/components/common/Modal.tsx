import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ContentItem } from '../../types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  max-width: 600px;
  width: 90%;
  padding: 20px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 0px;
    right: 3px;
  }
`;

const ModalImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
  @media (max-width: 540px) {
    width: 100%;
    object-position: top;
    height: auto;
    max-height: 400px;
    margin-right: 0;
  }
`;

const ModalTitle = styled.h2`
  margin-top: 0;
`;

const ModalYear = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalDescription = styled.p`
  line-height: 1.5;
`;

interface ModalProps {
  item: ContentItem;
  onClose: () => void;
}

const Modal = ({ item, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalImage src={item.images['Poster Art'].url} alt={item.title} />
        <ModalTitle>{item.title}</ModalTitle>
        <ModalYear>{item.releaseYear}</ModalYear>
        <ModalDescription>{item.description}</ModalDescription>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
