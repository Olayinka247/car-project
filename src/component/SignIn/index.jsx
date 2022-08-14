import React from "react";
import styled from "styled-components";
import img from "../../images/bg.png";
// import Button from "../Comps/Button";
import Input from "../Comps/Input";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3001/users/login", {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("token", res.data.accessToken);
  //       navigate("/home");
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       alert("Invalid email or password");
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <NavLogo to="/" onClick={() => navigate("/")}>
        Bold<span>AutoTec.</span>
      </NavLogo>
      <Before>
        <MainContainer>
          <WelcomeText>Welcome</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Email" />
            <br />
            <Input type="password" placeholder="password" />
          </InputContainer>
        </MainContainer>
      </Before>
    </>
  );
};

export default Signin;

const Before = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  eight: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #01b340 0%, #fff 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

const NavLogo = styled.div`
  background-color: #000;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  span {
    color: green;
  }
`;
