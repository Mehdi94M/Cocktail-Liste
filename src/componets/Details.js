import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams();
    const [drink,setdrink] = useState([])
    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then( (res) => {setdrink(res.data.drinks[0])})
        .catch(err =>console.log(err))
           },[])
  return (
    <div>
 
 <Card style={{ width: '18rem',display:"flex",  margin:'auto' }}>
 <Card.Img variant="top" src={drink.strDrinkThumb} />
  <Card.Header>{drink.strDrink}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{drink.strGlass}</ListGroup.Item>
    <ListGroup.Item>{drink.strInstructions}</ListGroup.Item>
    <ListGroup.Item>{drink.strIngredient1}</ListGroup.Item>
  </ListGroup>
</Card>
 
    </div>
  )
}

export default Details