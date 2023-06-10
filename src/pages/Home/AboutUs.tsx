// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  width: 50%;
  height: 30rem;
  margin: 13rem auto 3rem auto;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  h2 {
    font-size: 3rem;
  }
  ul {
    list-style: none;
    line-height: 4rem;
    li {
      font-size: 1.5rem;
    }
  }
`

const AboutUs = () => {
  // const language = useSelector((state: RootState) => state.language);

  return (
    <AboutUsContainer>
      <h2>About us</h2>
      <ul>
          {/* <li>{language.about_us_sentence}</li> */}
          <li>We serve Korean food at affordable prices!</li>
          <li>합리적인 가격으로 한식을 제공합니다!</li>
          <li>私たちは韓国料理をお手頃価格で提供しています！</li>
          <li>我们提供价格合理的韩国食品!</li>
      </ul>
    </AboutUsContainer>
  )
}

export default AboutUs