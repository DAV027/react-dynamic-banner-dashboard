import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="App">
      {bannerVisible && <Banner />}
      <Dashboard setBannerVisible={setBannerVisible} />
    </div>
  );
}

export default App;
