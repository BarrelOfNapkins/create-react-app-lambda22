import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {

  const [popular, setPopular] = useState([]);

  //run getPopular as soon as component is mounted
  useEffect(() => {
    getPopular();
  },[]);

  // wait for data before rendering anything
  const getPopular = async () => {

    const check = localStorage.getItem('popular');

    if(check){
      setPopular(JSON.parse(check));
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}&number=9`) //notice the backtacks (not quotes)
      const data = await api.json();
      console.log(data);
      
      // why use set and not assign? because set will call re-render
      // expl; https://stackoverflow.com/questions/53098873/why-does-react-have-to-use-setstate-for-state-update
      setPopular(data.recipes);

      localStorage.setItem('popular', JSON.stringify(data.recipes));
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide 
          options={{
            perPage:4,
            //arrows: false,
            pagination: false,
            //drag: 'free',
            gap: '5rem',
          }}
        >

        {popular.map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
            </SplideSlide>
          );
        })}


        </Splide>
      </Wrapper>
    </div>
  );
}

//root em, which is a measurement unit that refers to the font-size of the root element of a document. It is a relative unit, which means all values that use it change when the root's font-size changes. 
const Wrapper = styled.div`
  margin: 4rem 20%;
`;

const Card = styled.div`
  min-height:25rem;
  border-radius: 2rem;
  overflow: hidden;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular;