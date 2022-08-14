import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../component/ButtonElement";
import { useNavigate } from "react-router-dom";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
// import Video from "../../Video/video.mp4";

function FirstSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const navigate = useNavigate();

  return (
    <>
      <SectionContainer id="home">
        <SectionBg>
          <VideoBg
            autoPlay
            loop
            muted
            src={
              "https://player.vimeo.com/external/426199199.sd.mp4?s=ad37abb7b0f4438103e7debd27f95e5264af5f02&profile_id=164&oauth2_token_id=57447761"
            }
            type="video/mp4"
          />
        </SectionBg>
        <SectionContent>
          <SectionH1>
            BOLD<span>AUTOTEC.</span> - CAR REPORTS INFO{" "}
          </SectionH1>
          <SectionP>
            Sign up to get a instant report on a car in just a few minutes to
            making the best decision on buying a used car
          </SectionP>
          <SectionbtnWrapper>
            <Button
              onClick={() => navigate("/signin")}
              to="/signin"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </SectionbtnWrapper>
        </SectionContent>
      </SectionContainer>
    </>
  );
}

export default FirstSection;

const SectionContainer = styled.div`
  baground: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  padding: 0 30px;

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      bacground: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
      z-index: 2;

  
`;
const SectionBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const SectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: aboslute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  span {
    color: #01ff70;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
const SectionP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const SectionbtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  marging-top: 32px;
`;
const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  marging-left: 8px;
  font-size: 20px;
`;
