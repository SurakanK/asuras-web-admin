import React from "react";
import styled from "styled-components";
import IconBrang from "../images/icon.png"

const Nav = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  z-index: 30;
  align-items: stretch;
  background-color: #0F1035;
`;

const NavMain = styled.nav`
  display: inline-flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
`;

const LeftDiv = styled.a`
  display: flex;
  align-items: center;
  padding-left: 5vw;
  text-decoration: blink;

  img {
    width: 50px;

    @media (max-width: 1024px) {
      width: 45px;
    }

    @media (max-width: 768px) {
      width: 35px;
    }

    @media (max-width: 425px) {
      width: 30px;
    }
  }

  h2 {
    color: #ffffff;
    padding-left: 15px;
  }
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5vw;
  color: #c9c9c9;
`
const DonateButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  font-family: Mitr;
  color: #ffffff;
  background-image: linear-gradient(to right, #f857a6 0%, #ff5858  51%, #f857a6  100%);
  border-radius: 25px;
  border: 0px;
  height: 40px;
  padding: 5px 24px;
  transition: 0.5s;
  background-size: 200% auto;
  text-decoration: blink;

  &:hover{
    background-position: right center;
    padding: 5px 30px;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 35px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    height: 30px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavMain>
        <LeftDiv href="/">
          <img src={IconBrang} alt="" />
          <h2>{"WZM ADMIN"}</h2>
        </LeftDiv>
        <RightDiv>
          <h3>{"AR00145"}</h3>
        </RightDiv>
      </NavMain>
    </Nav>
  );
};

export default Navbar;
