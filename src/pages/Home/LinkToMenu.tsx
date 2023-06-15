import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from 'react-router-dom';
import '../../assets/button/button.css';
import styled from 'styled-components';

const LinkToMenuContainer = styled.div`
  width: 50%;
  height: 20rem;
  margin: 3rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: white;
    div{
      display: block;
      background: transparent;
      width: 10rem;
      height: 3rem;
      border: none;
      position: relative;
      border-radius: 0;
      z-index: 1;
      .button {
        width: 100%;
        height: 50%;
        position: absolute;
        top: 50%;
        left: 65%;
        transform: translate(-50%,-50%);
      }
      &:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin: auto;
        transition: .2s cubic-bezier(0.45, 0, 0.55, 1);
      }
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin: auto;
        transition: .2s cubic-bezier(0.45, 0, 0.55, 1);
        background: #fff6dc;
        z-index: -2;
      }
      &:before {
        background: #ffb509;
        border: 2px solid #ffb509;
        z-index: -1;
      }
      &:hover {
        color: #ffb509;
        &:before {
          background: transparent;
        }
        &:after {
          top: 6px;
          left: 6px;
        }
      }
    }
  }
`

const LinkToMenu = () => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <LinkToMenuContainer>
      <h2>{language.jump_to_menu_h2}</h2>
      <p>{language.jump_to_menu_p}</p>
      <Link to='/menu'>
        <div>
          <p className='button'>SEE MENU</p>
          {/* <p className='button'>{language.jump_to_menu_link}</p> */}
        </div>
      </Link>
    </LinkToMenuContainer>
  )
}

export default LinkToMenu