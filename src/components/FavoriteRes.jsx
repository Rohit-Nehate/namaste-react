import React, { use } from 'react'
import { useSelector } from 'react-redux'
import Card, {OpenCard} from './Card'
import { useDispatch } from 'react-redux'
import { clearFav } from '../utils/slice'
const FavoriteRes = () => {


    const resList = useSelector((store)=> store.fav.items)
const dispatch = useDispatch()


const OpenedCard = OpenCard(Card)
  return (
    <>
    <button className="p-2 m-4 rounded-2xl cursor-pointer bg-black text-white text-xl text-bold " onClick={
        ()=>{
      dispatch(clearFav())   
        }
    }>CLEAR FAVORITES</button>
    <div className="favRes flex gap-2 flex-wrap">
{resList.map(res=>
  res.info.avgRating >= 4.5? <OpenedCard key={res.info.id} resData={res}/>:  <Card key={res.info.id} resData={res}/>
)}
    
</div>
    </>
  )
}

export default FavoriteRes