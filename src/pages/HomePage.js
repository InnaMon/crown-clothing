import React from 'react';

import './HomePage.scss';
import Directory from '../components/Directory/Directory';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
      <Directory />
  </div>
)

export default HomePage;