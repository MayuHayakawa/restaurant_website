import { FaPepperHot } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
    width: 40rem;
    height: 100%;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 20rem;
    img {
        width: 80%;
        height: 100%;
        object-fit: cover;
    }
`

const MenuContainer = styled.div`
    display: flex;
    padding: 0 1rem 0 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .title_container {
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        h2 {
          font-size: 1.8rem;
        }
        div {
            color: red;
            svg {
                font-size: 1.5rem;
            }
        }
    }
    .price {
        width: 100%;
        display: block;
        font-size: 1.3rem;
        font-weight: 700;
    }
    .description {
      width: 80%;
      margin-top: 0.5rem;
      p {
        font-size: 1.3rem;
      }
    }
`

const Card = (props) => {
  return (
    <Container>
      <ImageContainer>
        <img src={props.image} alt={props.nameEN} />
      </ImageContainer>
      <MenuContainer>
        <div className='title_container'>
          <h2>{props.nameEN}</h2>
          <div>
            { props.spicy === 1 && <FaPepperHot /> }
            { props.spicy === 2 && (
              <>
                <FaPepperHot />
                <FaPepperHot />
              </>
            )}
          </div>
        </div>
        <p className='price'>${props.price}</p>
        <div className='description'>
          <p>{props.descriptionEN}</p>
        </div>
      </MenuContainer>
    </Container>
  )
}

export default Card