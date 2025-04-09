import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #ccc;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NavLink = styled(Link)`
  color: #ccc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ccc;
  border-radius: 4px;
`;

const AppStores = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const AppStoreButton = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavLinks>
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/">Terms and Conditions</NavLink> |
        <NavLink to="/">Privacy Policy</NavLink> |
        <NavLink to="/">Collection Statement</NavLink> |
        <NavLink to="/">Help</NavLink> |<NavLink to="/">Manage Account</NavLink>
      </NavLinks>

      <Copyright>
        Copyright © 2016 DEMO Streaming. All Rights Reserved.
      </Copyright>

      <FooterRow>
        <SocialIcons>
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
        </SocialIcons>

        <AppStores>
          <AppStoreButton>App Store</AppStoreButton>
          <AppStoreButton>Google Play</AppStoreButton>
          <AppStoreButton>Microsoft Store</AppStoreButton>
        </AppStores>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
