import { useEffect, useState } from "react"
import Shimmer from "./Simmer"
import { useParams } from "react-router"
import urlData from "../utils/constant"
import useRestaurentData from "../utils/useRestaurentData"


const Restaurent = ()  =>{
 

        


    

const {resIDs}= useParams() 
    
const resInfo = useRestaurentData(resIDs)

   


//     if(resInfo===null) return <Shimmer/>
// console.log( resInfo)
//     const {name,  cuisines}= resInfo?.cards[2]?.card?.card?.info
//    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
//   console.log(itemCards)
//   console.log(resIDs)

    return(
        <div className="res-div">

{/* <h1>{name}</h1>
<h2>{cuisines.join(", ")}</h2>

<ul>
<h2>-MENU-</h2>

    {itemCards.map(item =>{
   return <li key={item.card.info.id}>- {item.card.info.name}  Price- RS {item.card.info.price/100 || item.card.info.defaultPrice
/100}</li>
    })} 

   
   
   


</ul> */}


        </div>
    )
}

export default Restaurent