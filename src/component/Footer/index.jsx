import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <Footerlink to="/signin">How it works</Footerlink>
              <Footerlink to="/signin">Testimonils</Footerlink>
              <Footerlink to="/signin">Testimonial</Footerlink>
              <Footerlink to="/signin">Career</Footerlink>
              <Footerlink to="/signin">Terms Of Service</Footerlink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <Footerlink to="/signin">How it works</Footerlink>
              <Footerlink to="/signin">Testimonils</Footerlink>
              <Footerlink to="/signin">Testimonial</Footerlink>
              <Footerlink to="/signin">Career</Footerlink>
              <Footerlink to="/signin">Terms Of Service</Footerlink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <Footerlink to="/signin">How it works</Footerlink>
              <Footerlink to="/signin">Testimonils</Footerlink>
              <Footerlink to="/signin">Testimonial</Footerlink>
              <Footerlink to="/signin">Career</Footerlink>
              <Footerlink to="/signin">Terms Of Service</Footerlink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <Footerlink to="/signin">How it works</Footerlink>
              <Footerlink to="/signin">Testimonils</Footerlink>
              <Footerlink to="/signin">Testimonial</Footerlink>
              <Footerlink to="/signin">Career</Footerlink>
              <Footerlink to="/signin">Terms Of Service</Footerlink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <NavLogo to="/" onClick={toggleHome}>
              Bold<span>AutoTec.</span>
            </NavLogo>
            <WebsiteRights>
              BoldAutoTec © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #101522;
`;

const FooterWrapper = styled.div`
 padding : 48px 24px
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
`;

const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media scree and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width:160px
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;

`;

const FooterLinkTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Footerlink = styled(Link)`
  color: #fff;
  text-decoration: none;
  marging-bottom: 0.5rem
    font-size: 14px;


    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  marging-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
const NavLogo = styled(Link)`
  color: #fff;
  justify-self: start 
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  span {
    color: green;
  }
`;
