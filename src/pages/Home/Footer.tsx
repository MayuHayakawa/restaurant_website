import styled from 'styled-components';
import Logo from '../../components/Logo';

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 50vh; */
  height: 50rem;
  color: white;
  margin-top: 10rem;
`

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: -10;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
`

const InfoContainer = styled.div`
  width: 45%;
  height: 100%;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .businessHours {
      position: relative;
      height: 10rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      font-size: 1.7rem;
      &:before {
        content: '';
        width: 100%;
        height: 2px;
        background-color: white;
        position: absolute;
        top: -3px;
      }
      &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: white;
        position: absolute;
        bottom: -3px;
      }
    }
    address {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.5rem;
      font-style: normal;
      &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: white;
        position: absolute;
        bottom: -15px;
      }
      .addressInfo {
        padding-top: 1rem;
        display: flex;
        flex-direction: row;
        gap: 3rem;
        .map {
          width: 10rem;
          height: 5rem;
          display: flex;
          justify-content: center;
          text-align: center;
          background-color: black;
          border: 1px solid white;
          cursor: pointer;
          a {
            color: white;
          }
        }
      }
      .tel {
        height: 2rem;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        a {
          color: white;
        }
      }
    }
  }
  
`

const Footer = () => {
  return (
  <FooterContainer>
    <ImageContainer>
      <img src='public/image/marcin-skalij-w_2vlvTgk7E-unsplash.jpg' alt='footer_bgimg' />
    </ImageContainer>
    <InfoContainer>
      <div>
        <Logo />
      </div>
      <div>
        <div className='businessHours'>
          <h3>MONDAY - THUESDAY : 11AM to 6PM</h3>
          <h3>FRYDAY : 11AM to 5PM</h3>
        </div>
        <address>
          <div className='addressInfo'>
            <h4>529 West Pender Street<br/>Vancouver, BC V6B 1V5<br/>Canada</h4>
            <div className='map'>
              <a href='https://goo.gl/maps/qavvFaQMuESV96cF9' target='_blank'>Map it</a>
            </div>
          </div>
          <div className='tel'>
            <p>TEL:</p>
            <a href='tel:6046814422'>(604) 681-4422</a>
          </div>
        </address>
      </div>
    </InfoContainer>
  </FooterContainer>
  )
}

export default Footer