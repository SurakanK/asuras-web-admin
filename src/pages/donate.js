import * as React from "react"
import styled from "styled-components";
import Layout from "../components/layout/layout";
import bannerDonate from "../images/banner/bannerDonate.png"
import qrCode from "../images/qrcode/qr.jpg"

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

const LayoutDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #7FC7D9;
  flex-direction: column;
  align-items: center;
  padding: 6vw;
  gap: 60px;
`

const LayoutImageDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-items: center;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const ImageBanner = styled.img`
  width: 100%;
`

const ImageQr = styled.img`
  width: 50%;
  border-radius: 10px;
`

const Donate = () => {
  return (
    <Layout>
      <MainDiv>
        <LayoutDiv>
          <h1 style={{ color: "#27374D" }}>ขอบคุณสำหรับทุกการสนับสนุน</h1>
          <LayoutImageDiv>
            <ImageBanner src={bannerDonate} />
            <ImageQr src={qrCode} />
          </LayoutImageDiv>
        </LayoutDiv>
      </MainDiv>
    </Layout>
  )
}

export default Donate

