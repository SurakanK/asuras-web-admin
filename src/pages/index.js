import * as React from "react"
import styled from "styled-components";
import bannerIntro from "../images/banner/bannerIntro.png"
import tetraBg from "../images/background/tetrisBg.jpeg"
import tetrisBanner from "../images/banner/iphone.png"
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";
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

const GridDiv = styled.div`
  display: grid;
  background-color: #27374D;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`
const LeftDiv = styled.div`
  padding: 2vw 6vw 2vw 6vw;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const LeftGameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6vw 6vw 10vw 6vw;

  @media (max-width: 768px) {
    padding: 6vw 6vw 15vw 6vw;
  }

  @media (max-width: 425px) {
    padding: 6vw 6vw 20vw 6vw;
  }
`

const RightDiv = styled.div`
  padding: 2vw 6vw 2vw 6vw;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const ImageIntro = styled.img`
  width: 100%;
`

const TetarGameDiv = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  background-image: url(${tetraBg});
  background-size: cover;
  background-position: center;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const TetrisTextDiv = styled.div`
  padding: 4vw;
  backdrop-filter: brightness(60%);
  border-radius: 25px;
`

const TetrisBannerImage = styled.img`
  width: 400px;

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 425px) {
    width: 200px;
  }
`

const TetarButtonStoreDiv = styled.div`
  position: absolute;
  position: absolute;
  display: flex;
  gap: 20px;
  transform: translate(-50%, -50%); 
  bottom: 3%;
  left: 50%;

  @media (max-width: 768px) {
    scale: 0.7;
    bottom: 5%;
    left: 30%;
  }

  @media (max-width: 425px) {
    scale: 0.7;
    bottom: -2%;
    left: 35%;
  }
`
const MoreButton = styled.button`
  font-size: 20px;
  font-weight: 500;
  font-family: Mitr;
  color: #ffffff;
  background-image: linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%);
  border-radius: 25px;
  border: 0px;
  height: 50px;
  padding: 5px 40px;
  transition: 0.5s;
  background-size: 200% auto;

  &:hover{
    background-position: right center;
    padding: 5px 45px;
  }
         
  @media (max-width: 1024px) {
    font-size: 18px;
    height: 45px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 40px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    height: 35px;
  }
`;

const IndexPage = () => {
  const APKUrl = "https://google.com";
  const IOSUrl = "https://google.com";

  return (
    <Layout>
      <MainDiv>
        <GridDiv>
          <LeftDiv>
            <h2 style={{ color: "#DDE6ED" }}>สวัสดี ยินดีที่ได้รู้จัก !!</h2>
            <h3 style={{ textIndent: "2vw", color: "#9DB2BF" }}>
              Aub Studio เต็มไปด้วยความจินตนาการและความสร้างสรรค์ที่ไม่มีขอบเขต
              เราเป็นนักพัฒนาเกมชาวไทยขนาดเล็กที่หลงไหลในการสร้างเกม พวกเราอยากสร้างประสบการณ์ที่ยิ่งใหญ่และทรงพลัง
              ด้วยความคิดสร้างสรรค์และความกล้าหาญที่ไม่ยอมแพ้ มาร่วมผจญภัยในโลกของเรา ที่ Aub Studio
              เราหวังว่าจะเป็นส่วนหนึ่งในการเปลี่ยนแปลงวงการเกม
            </h3>
            <h3 style={{ color: "#9DB2BF" }}>
              มาร่วมเป็นส่วนหนึ่งกับเรา
            </h3>
          </LeftDiv>
          <RightDiv>
            <ImageIntro src={bannerIntro} />
          </RightDiv>
        </GridDiv>
        <TetarGameDiv>
          <LeftGameDiv>
            <TetrisBannerImage src={tetrisBanner} />
            <TetarButtonStoreDiv>
              <AppStoreButton
                url={IOSUrl}
                theme={"dark"}
                height={40}
                width={160}
              />
              <GooglePlayButton
                url={APKUrl}
                theme={"dark"}
                height={40}
                width={160}
              />
            </TetarButtonStoreDiv>
          </LeftGameDiv>
          <RightDiv>
            <TetrisTextDiv>
              <h1 style={{ color: "#DCF2F1" }}>TETRA BATTLE</h1>
              <h3 style={{ textIndent: "2vw", color: "#DCF2F1" }}>
                Tetris Battle เป็นเกมที่ได้แรงบันดาลใจมาจาก tetris ที่เป็นเกมยอดฮิตของวัยรุ้นยุค 90s
                เรานำมาปรับปรุงให้เกมสามารถเล่นด้วยกันได้แบบ Online Multiplayer เพื่อให้ผู้เล่นได้รู้สึกสนุก
                กับการเอาชนะผู้เล่นฝั่งตรงข้าม และยังมีระบบบอร์ดคะแนนที่ให้ผู้เล่นอยากทำคะแนนให้สูงที่สุด
              </h3>
              <h2 style={{ color: "#DCF2F1" }}>
                สามารถเข้าเล่นได้แล้ววันนี้
              </h2>
              {/* <MoreButton>More</MoreButton> */}
            </TetrisTextDiv>
          </RightDiv>
        </TetarGameDiv>
      </MainDiv>
    </Layout>
  )
}

export default IndexPage
