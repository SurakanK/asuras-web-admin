import * as React from "react"
import styled from "styled-components";
import Layout from "../components/layout/layout"

const MainDiv = styled.div`
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 89px;

  @media (max-width: 1024px) {
    padding-top: 78px;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
  }

  @media (max-width: 425px) {
    padding-top: 65px;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <MainDiv>
      </MainDiv>
    </Layout>
  )
}

export default IndexPage
