import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Platform() {


  const [ allGames ,setAllGames ] = useState(null)
  


  let {params}=useParams();
  


const getApiReq = async () => {
	const config = {
		headers: {
			'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'
		}
   
     
	};
	const {data} = await axios.get(
		`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${params}`,config
	);
	setAllGames(data)
};

useEffect(function(){
  getApiReq()
},[params]);


  return <>
 <div className="container">
 <div className=' row g-3'>
    {allGames? allGames.map((game ,i)=> <div key={i} className='col-3  '>
    <Link to={`/game-details/${game.id}`} >
      <div className='game rounded-2 '>
        <img className=' w-100' src={game.thumbnail} alt=" gameimage" />
        <div className=' p-2 gameData'>
          <div className='d-flex justify-content-between'>
          <h4 >{game.title.length > 12 ?game.title.slice(0 ,12)+"...":game.title }</h4>
        <p className='ms-auto text-white bg-primary px-2 rounded-3 fs-6'> FREE</p>
          </div>


        <p>{game.short_description.slice(0, 25) +"..." } </p>
        <div className=' d-flex justify-content-between ' >
        <i class="fa-solid fa-square-plus"></i>
          <div>
            <span className='m-2  rounded-5 px-2 light-gray' >{game.genre}</span>
            {game.platform =="PC (Windows)"?  <i className="fa-brands fa-windows"></i>:<i className="fa-solid fa-window-maximize"></i>}
            

          </div>
        </div>
        </div>
      </div>
      </Link>
     </div>)
   
     :<div className=' loading bg-muted d-flex align-items-center justify-content-center fs-1 '>
     <i class="fa-solid fa-spinner fa-spin"></i>
</div>     }




  </div>
  
 </div>
  
  
  </>
}
