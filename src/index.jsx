import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from './components/Header'
import Body from './components/Body'

// import About from './components/About'
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom' 
import Restaurent from "./components/Restaurent.jsx";
import userContext from "./utils/userContext";
import appStore from "./utils/store.jsx";
import { Provider } from "react-redux";
import FavoriteRes from "./components/FavoriteRes.jsx";
import Contact from "./components/Contact.jsx";

 const About = lazy(()=>{
       return import("./components/About")
    })
const Index= ()=>{


          const [UserNamee, setUserName] = useState(null)

useEffect(()=>{

    const data = {
      user: "Evoker"
    }
    setUserName(data.user)
},[])

   
    return (
        <>

            <Provider store={appStore}>
        <userContext.Provider value={{userName: UserNamee}}>
   <Header/>
        <Outlet/>

        </userContext.Provider>
        </Provider>

        
        
        </>
    )
}

const appRouter = createBrowserRouter([
{
    path: "/",
    element: <Index />,
    children:[
{
    path: "",
    element: <Body/>
},
{
    path: "about",
    element: <Suspense fallback={<></>}><About/></Suspense> 
},
{
    path: "restaurents/:resIDs",
    element: <Restaurent/>
},
{
    path: '/favorite', 
    element:<FavoriteRes/>
},
{
    path: '/contact', 
    element:<Contact/>
}
    ],
    errorElement: <Error/>
},


])

const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(<RouterProvider router={appRouter} />)
 