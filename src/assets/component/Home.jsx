import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from './Client';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../../src/App.css"

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client.getEntries().then((response) => {
      setRecipes(response.items);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <Carousel prevLabel="Next" nextLabel="Previous" className='Carousel'>
        {recipes.map((recipe) => (
          <Carousel.Item key={recipe.sys.id}>
            <Card className='recipe-cards'>
            <Link className='ShowMore' to={`/recipes/${recipe.sys.id}`}><Card.Img  className='Card-Img' src={recipe.fields.image?.fields?.file?.url} alt={recipe.fields.recipeName} /></Link>
              <Card.Body className='CardBody'>
                <Card.Title className='CardName'>{recipe.fields.recipeName}</Card.Title>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='List-Cards'>
      {recipes.map((recipe) => (
      <Card  key={recipe.sys.id} style={{ width: '20rem',height:'30rem' }}>
         <Card.Img  className='List-Card-Img' src={recipe.fields.image?.fields?.file?.url} alt={recipe.fields.recipeName}></Card.Img>
         <Card.Body>
          <div className='BodyPart'>
          <Card.Title className=''>{recipe.fields.recipeName}</Card.Title>
          {recipe.fields.vegan && <img src='https://styles.redditmedia.com/t5_5vpaif/styles/communityIcon_l12iq2pwpui81.png' style={{ height:'70px', width:'auto' }}/>}
          </div>
           <Card.Text>
              Contains: {recipe.fields.calory} calories
            </Card.Text>
             <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      
      ))}
      </div>
    </div>

  );
}

export default Home;
