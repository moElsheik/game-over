import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from '../../images/home.png';

export default function Home() {
  return <>
  
  <div className=' text-center homeDiv  py-5' style={{ backgroundImage: `url(${homeImage})` }}>
    <h1 className=' '>Find & track the best <span className='text-info'>free-to-play</span>  games!</h1>
    <p className='text-muted fs-5 fw-light'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
    <Link to="/all" ><button type="button" className="btn btn-outline-secondary mb-2">Browse Games</button></Link>
  </div>
  
  </>
    
  
}
