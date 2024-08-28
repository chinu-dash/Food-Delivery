import React, { useState } from 'react';
import Navbar from './Compontent/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Compontent/Footer/Footer';
import LoginPopup from './Compontent/LoginPopup/LoginPopup';


const App = () => {
  const [showLogin , setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>

      </Routes>
      
    </div>
    <Footer/>
    </>
  
  )
}

export default App
