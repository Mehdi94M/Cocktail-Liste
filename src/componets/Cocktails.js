import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CocktailCard from './CocktailCard'

function Cocktails() {
const [drinks,setdrinks] = useState([])
    useEffect(() => {
 axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
 .then( (res) => {console.log(res.data);setdrinks(res.data.drinks)})
 .catch(err =>console.log(err))
    },[])
  return (
    <div style={{display:"flex",  margin:'auto',paddingBottom:'100px',justifyContent:'space-around',flexWrap: 'wrap'}} >
  {
      drinks.map( drink => <CocktailCard  drink={drink} key={drink.id}/> )
  }
    </div>
  )
}

export default Cocktails