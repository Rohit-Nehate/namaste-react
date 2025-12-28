import React, { useContext } from 'react'
import logo from '../Logo.png'
import urlData from '../utils/constant'
import userContext from '../utils/userContext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


 const Header = () => {


  const favItems = useSelector((store)=> store.fav.items)
console.log(favItems)
const {userName}  = useContext(userContext)

  return (
    <>
    <div className="header flex justify-between items-center">


      
      <img className="logo w-30"  src={urlData.LOGO_URL} alt="" />

      <ul className='creds flex gap-20'>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> <Link to="/favorite">Favorites - {favItems.length}</Link></li>
        <li> <Link to="/">{userName}</Link></li>
        
      </ul>

    </div>
    

    
    </>
   
   
  )
}

export default Header