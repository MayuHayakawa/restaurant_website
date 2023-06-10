import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { changeLanguage } from "../redux/LanguageSlice/LanguageSlice";
import { Chinese, English, Japanese, Korean } from "../redux/LanguageSlice/Language";
import styled from 'styled-components';
import Logo from "./Logo";
import BusinessHours from "./BusinessHours";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10rem;
  z-index: 10;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem 3rem;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .3);
  div {
    /* width: 15rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center; */
    a {
      font-size: 2rem;
      color: white;
      font-family: 'Jua';
      cursor: pointer;
    }
  }
`

const MenuList = styled.ul`
  display: flex;
  width: 100%;
  gap: 3rem;
  justify-content: center;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    a {
      font-size: 1.5rem;
      color: black;
    }
    p {
      font-size: 1.5rem;
    }
  }
`

const LanguageList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
  li {
    cursor: pointer;
  }
`

const Navbar = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language);

  return (
    <Header>
      <Nav>
        <div>
          <Logo />
          {/* <Link to='/'>ChamMani</Link> */}
        </div>
        <MenuList>
          <li>
            {/* <Link to='/#about_us'>{language.about}</Link> */}
            <HashLink smooth to="/#aboutUs">{language.about}</HashLink>
          </li>
          <li>
            <Link to='/menu'>{language.menu}</Link>
          </li>
          <li>
            <HashLink smooth to="/#footer">{language.location}</HashLink>
          </li>
          <li>
            <a href='https://www.skipthedishes.com/cham-mani-529-west-pender-street?utm_source=google&utm_medium=organic&utm_campaign=gpa' target="_blank">{language.order_online}</a>
          </li>
          <li>
            <BusinessHours />
          </li>
        </MenuList>
        <LanguageList>
          <li onClick={() => dispatch(changeLanguage(English))}>English</li>
          <li onClick={() => dispatch(changeLanguage(Korean))}>한글</li>
          <li onClick={() => dispatch(changeLanguage(Japanese))}>日本語</li>
          <li onClick={() => dispatch(changeLanguage(Chinese))}>中文</li>
        </LanguageList>
      </Nav>
    </Header>
  )
}

export default Navbar