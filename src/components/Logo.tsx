import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 15rem;
  height: 7rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 2rem;
    color: white;
    font-family: 'Jua';
    cursor: pointer;
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      <HashLink smooth to='/#home'>ChamMani</HashLink>
    </LogoContainer>
  )
}

export default Logo