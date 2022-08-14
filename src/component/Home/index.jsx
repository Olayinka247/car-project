import React from "react";
import styled from "styled-components";
import Sidebar from "../HomeSidebar";
import MainContent from "../MainContent/Index";

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 0.5rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
