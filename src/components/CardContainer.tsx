import styled from 'styled-components';

import Card from './Card';
import data from '../../public/data.json';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 13rem 1rem 5rem 1rem;
  .category_container {
    width: 100%;
    height: 100%;
    margin: 3rem 0 3rem 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    text-align: center;
    h1 {
      font-size: 3rem;
      color: orange;
    }
    .menu_container {
      margin: 2rem auto;
      width: 100%;
      display: grid;
      place-content: center;
      grid-template-columns: repeat(auto-fit, minmax(40rem, 30rem));
      gap: 1rem;
    }
  }
`

const CardContainer = () => {

  const mealCategory: string[] = ["DUKBOKGI", "MEALS", "BULGOGI", "NOODLES", "COMBO", "SIDE MENU"];

  return (
    <Container>
      { mealCategory.map((category) => {
        return (
        <div className='category_container'>
          <h1>{category}</h1>
          <div className='menu_container'>
            { data.data.map((menu) => {
              if(menu.category === `${category}`) {
                return <Card key={menu.id} {...menu} />
              }
            }
            )}
          </div>
        </div>
        )
      })}
    </Container>
  )
}

export default CardContainer;