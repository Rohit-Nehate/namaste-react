import React, { useEffect, useState } from 'react'
import Card, {OpenCard} from './Card.jsx'
import data from '../utils/data.jsx'
import Shimmer from './Simmer.jsx'

const Body = () => {

const [restoData, setRestoData] = useState([])
const [restoDataFixed, setRestoDataFixed] = useState([])




const [searchText, setSearchText] =useState("")



useEffect(()=>{
fetchData()
},[])

// console.log(restoData)


const OpenedCard = OpenCard(Card)

// console.log(OpenedCard)

const fetchData = async ()=>{

const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const response = await data.json()

setRestoData(response.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setRestoDataFixed(response.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}




  return  (
    <div className='body '>

      <div className="filter"><button onClick={()=>{
        setRestoData(restoDataFixed.filter(res => res.info.avgRating >= 4.4))
      }} >top rated res</button>
      

      
 {console.log(restoData)}
        <div className="search">
          <input className="serach-text border-2" type="text" value={searchText}
          
          onChange={(e)=>{
            setSearchText(e.target.value)

           const filterRes = restoDataFixed.filter(res=> {
                        
                      
                      return res.info.name.toLowerCase().includes(searchText.toLowerCase())})

                      
                    setRestoData(filterRes)
          }

        }
          
          />
          <button
          
          onClick={
            ()=>{
                   

         
                   
            }

          } 
          
          >Search</button>
        </div>

      </div>
      <div className="card-container flex gap-1.5 flex-wrap">
       {restoData.map((res) =>
       
     
      res.info.avgRating >= 4.5? <OpenedCard key={res.info.id} resData={res}/>:  <Card key={res.info.id} resData={res}/>
     


      )}
       
     
      </div>

    </div>
  )
}

export default Body