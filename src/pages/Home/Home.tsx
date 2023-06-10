import styled from 'styled-components';

import AboutUs from "./AboutUs"
import LinkToMenu from "./LinkToMenu";
import Footer from './Footer';

const ImageContainer = styled.div`
    position: relative;
    padding-top: 10rem;
    width: 100%;
    height: 50%;
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        width: 40rem;
        height: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        border: 1px solid white;
        h1 {
          font-size: 5rem;
          color: white;
          font-family: 'Jua';
        }
    }
    video {
        width: 100%;
        height: 100%;
    }
`

const Home = () => {
  return (
    <>
      <ImageContainer id='home'>
        <div>
            <h1>ChamMani</h1>
        </div>
        <video src='public/pexels-roman-odintsov-5337025-1366x720-30fps.mp4' autoPlay muted playsInline>
            <img /> 
        </video>
      </ImageContainer>
      <div id='aboutUs'></div>
      <AboutUs />
      <LinkToMenu />
      <div id='footer'></div>
      <Footer />
    </>
  )
}

export default Home