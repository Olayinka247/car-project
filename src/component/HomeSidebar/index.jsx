import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import { FiLogOut } from "react-icons/fi";

import { darkThemeColor } from "../../utils";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={"https://placekitten.com/g/200/300"} />
        <Name>Brian Kelly</Name>

        <Badge content="Pro Level" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Analytics</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Browse Cars</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>
            <FiLogOut size={25} />
            Log Out
          </span>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 20%;
  height: 100% !important;

  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 25%;
  width: 70%;
  border-radius: 50%;
  margin-top: 5%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  margin-bottom: 15rem 5;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: -60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  font-weight: 800;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 5%;

  color: #c4c4c4;
  height: 5%;
  margin: auto auto;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  flex-direction: column;
  padding: 0.5rem;
  a {
    color: white;
    padding: 0.5rem;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;
