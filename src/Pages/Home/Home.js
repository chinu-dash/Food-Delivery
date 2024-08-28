import React, { useState } from 'react';
import './Home.css';
import Header from '../../Compontent/Header/Header';
import ExploreMenu from '../../Compontent/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Compontent/FoodDisplay/FoodDisplay';
import AppDownload from '../../Compontent/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>

    </div>
  )
}

export default Home
