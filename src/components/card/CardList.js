import React from 'react'
import Card from "./Card"


const CardList = (props) => (
  
<div className = "row">
   
    {props.profiles.map((element) => <Card key={element.id} {... element}/>)}
</div>
)

export default CardList;