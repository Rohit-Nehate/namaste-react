import React, { useEffect } from 'react'
import urlData from '../utils/constant'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addItem } from '../utils/slice';

const Card = (props) => {   






  const {resData}= props;

const {name, costForTwo,avgRating,cloudinaryImageId, cuisines, id, isOpen}= resData.info

const dispatch = useDispatch()

const itemList = useSelector((store)=> store.fav.items)

const itemHandeler = (item)=>{
  if(!itemList.some(res=> res.info.id=== item.info.id))
  dispatch(addItem(item))
}



  return (
    
    
<div className="res-card w-50 p-1 border-2 rounded-sm">

<Link style={{ textDecoration: "none", color: "black" }} to={"restaurents/"+id}>

    <img src={`${urlData.RES_IMG+cloudinaryImageId}`} alt="res card" />
    <h1>{name}</h1>
  <p>- {cuisines.join(', ')}</p>
  <p>- {costForTwo}</p>
  <p>- Rating {avgRating}</p>


    
</Link>
 <button onClick={()=>{
  itemHandeler(resData)
 }} className='p-2 bg-amber-50 text-black border cursor-pointer'> Favorite </button>

</div>

   
  )
}

export const OpenCard = (Card)=>{
return(props)=>{
  return(
    <div className="res-card">
     <label className='absolute bg-green-600 pb-1 text-white'>TOP RATED</label>
    
    <Card {...props}/>
    
  </div>
  )
}
}

export default Card