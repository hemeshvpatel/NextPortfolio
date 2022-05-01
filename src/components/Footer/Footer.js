import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building one project at a time 🚀</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={"https://github.com/hemeshvpatel"} target="_blank">
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons
            href={"https://www.linkedin.com/in/hemeshvpatel/"}
            target="_blank"
          >
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
