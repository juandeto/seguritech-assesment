import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 48px;
  color: #ff0000;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const ErrorDescription = styled.p`
  color: #666;
  max-width: 600px;
`;

const ReloadButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

interface ErrorStateProps {
  message: string;
}

const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorMessage>Oops, something went wrong...</ErrorMessage>
      <ErrorDescription>{message}</ErrorDescription>
      <ReloadButton onClick={() => window.location.reload()}>
        Reload
      </ReloadButton>
    </ErrorContainer>
  );
};

export default ErrorState;
