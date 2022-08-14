import React from "react";
import Icon1 from "../../images/buyCar-1.png";
import Icon2 from "../../images/buyCar-1.svg";
import Icon3 from "../../images/buyCar-1.svg";
import styled from "styled-components";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>1</ServicesH2>
            <ServicesP>2</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>1</ServicesH2>
            <ServicesP>2</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>1</ServicesH2>
            <ServicesP>2</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>1</ServicesH2>
            <ServicesP>2</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;

const ServicesContainer = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } ;
`;

const ServicesWrapper = styled.div`
max-width: 1100px;
marging: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 16px;
align-items: center;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;

`;

const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  marging-bottom: 10px;
`;

const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
