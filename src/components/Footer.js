import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
    display: flow-root;
    background-color: #526D82;
    padding: 1vw 4vw;
`;

const GridUnderLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const LeftDiv = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  gap: 2vw;

  a {
    color: #9DB2BF;
    text-decoration: blink;
  }
`

const RightDiv = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  gap: 2vw;

  a {
    color: #9DB2BF;
    text-decoration: blink;
  }
`

const Footer = () => {
  return (
    <MainDiv>
      <GridUnderLine>
        <LeftDiv>
          <a href="/">AUB STUDIO</a>
          <a>email: aub.indiegame@gmail.com</a>
        </LeftDiv>
        <RightDiv>
          <a href="/about/terms-and-conditions">Terms and Conditions</a>
          <a href="/about/privact-and-policy"> Privacy Policy</a>
        </RightDiv>
      </GridUnderLine>
    </MainDiv>
  );
};

export default Footer;
