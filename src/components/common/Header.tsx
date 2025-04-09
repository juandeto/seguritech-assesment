import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #0077ff;
  color: white;
  padding: 0 40px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    height: auto;
    padding: 10px;
    gap: 12px;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const TrialButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">DEMO Streaming</Logo>
      <ButtonContainer>
        <LoginButton>Log in</LoginButton>
        <TrialButton>Start your free trial</TrialButton>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
