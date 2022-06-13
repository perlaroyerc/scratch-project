import React, { Component } from 'react';
import FeaturedBiz from '../component/FeaturedBiz';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Bodega from '../component/BodegaOneMenu';


// Featured Business Webpage
const FeaturedContainer = () => {
  // func for randomizing array of x numbers depending on number of bodegas in db
    // create new array to hold numbers

  // create empty array to hold FeaturedBiz components with unique keys corresponding to numbers
  // test with hardcoded keys first
  const nums = [1,2,3]
  const smallBizArray = nums.map(num => <FeaturedBiz chosenId={num} />)

  return (
    <div className='featured-container'>
       featured-container
       {smallBizArray}
    <Router>
      <Routes>
      <Route path="/FeaturedBiz" component={<FeaturedBiz />} />
        <Route path="/FeaturedBiz/:id" component={<Bodega />} />
      </Routes>
    </Router>
    </div>
  )

}



export default FeaturedContainer;