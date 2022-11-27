import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';



export default function Gamedetails() {
  const [ game ,setGame ] = useState(null)
  
  let {params}=useParams();

const getApiReq = async () => {
	const config = {
		headers: {
			'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'
		}
	};
	const {data} = await axios.get(
		`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params}`,config
	);
	setGame(data)
  
};

useEffect(function(){
  getApiReq()
},);




  return (
    <>
    {game !== null ? 
      <div className='container'>
        <div className="row">
      
      <div className="col-md-4">
          <div>
            <img className='w-100 rounded-3' src={game.thumbnail} alt="" />
          </div>
          <span> FREE</span>
          
          
        </div>

        <div className="col-md-6">
          <div>
            <h2>{game.title}</h2>
            <h4>{`About ${game.title}`}</h4>
            <p>{game.description} </p>
            <h4> Minimum System Requirements</h4>
            <ul>
             {game.minimum_system_requirements.graphics?<li> {`graphics: ${game.minimum_system_requirements.graphics}`}</li>: ""} 
             {game.minimum_system_requirements.memory?<li>{`memory: ${game.minimum_system_requirements.memory}`}</li>:""} 
              {game.minimum_system_requirements.os?<li>{`os: ${game.minimum_system_requirements.os}`}</li>:""} 
              {game.minimum_system_requirements.processor?<li>{`processor: ${game.minimum_system_requirements.processor}`}</li>:""} 
              {game.minimum_system_requirements.storage?<li>{`storage: ${game.minimum_system_requirements.storage}`}</li>:""} 
            </ul>
          
          <h4>{`${game.title} Screen shots `}</h4>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={game.screenshots[0].image} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={game.screenshots[1].image} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={game.screenshots[2].image} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<h2>Additional Information</h2>
<div className='row py-4 g-3'>
<div className='col-4'>
<li className='text-muted pb-0'>Title</li>
<li>{game.title}</li>
</div>
<div className='col-4'>
<li className='text-muted pb-0'>Developer</li>
<li>{game.developer}</li>
</div>
<div className='col-4'>
<li className='text-muted pb-0'>Publisher</li>
<li>{game.publisher}</li>
</div>
<div className='col-4'>
<li className='text-muted pb-0'>Release Date</li>
<li>{game.release_date}</li>
</div>
<div className='col-4'>
<li className='text-muted pb-0'>Genre</li>
<li>{game.genre}</li>
</div>
<div className='col-4 '>
<li className='text-muted pb-0'>Platform</li>
<li>{game.platform === "Windows" ?  <i class="fa-brands fa-windows"></i>  : <i class="fa-solid fa-window-maximize"></i> }</li>
</div>

</div>
           
          </div>
        </div> 
      </div>
      </div>: <div className=' loading bg-muted d-flex align-items-center justify-content-center fs-1 '>
     <i class="fa-solid fa-spinner fa-spin"></i>
</div>}
    </>
  );
}
