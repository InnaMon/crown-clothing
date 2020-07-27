import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import Spinner from '../WithSpinner/Spinner';

import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

const Directory = ({ sections }) => {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0)  

  const loadHandler =() => {
    if (counter < sections.length) {
      setCounter(prevState => prevState+1)
    }
  }

  useEffect(() => {
    const stopLoader = () => {
      if (counter >= sections.length) {
        setLoading(false);
      }
    }
    stopLoader()
  }, [counter, sections])

 return (<>  
  <div style={{display: loading ? "block" : "none"}}>
    <Spinner />
  </div> 

  <div className='directory-menu' style={{visibility: loading ? "hidden" : "visible"}}>
    {
      sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id}
          loadHandler={loadHandler}
          {...otherSectionProps}/>
      ))
    }
  </div>

  </>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);