import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CocktailCard({drink}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={drink.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{drink.strDrink}</Card.Title>
    <Card.Text>
    {drink.strAlcoholic}
    </Card.Text>
    <Link to={`/Details/${drink.idDrink}`}><Button variant="primary">Go somewhere</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default CocktailCard