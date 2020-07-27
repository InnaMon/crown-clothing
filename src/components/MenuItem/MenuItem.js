import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match, loadHandler}) => {

     return (<div className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <img className='background-image' src={imageUrl} alt="background" onLoad={loadHandler} />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);