import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'


function Details(){
    const {id} = useParams()
    const [anime, setAnime] = useState([])
    const GetMyTopAnime = async() => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
          .then(res => res.json());
          
        setAnime(temp.data);
      }
      console.log(anime)
      useEffect(() => {
        GetMyTopAnime();
        console.log("My Top Animes");
        
      }, []);
    return(
        
        <div className="details-container">
            <Link to="/">Home</Link>
            <h2>{anime.title}</h2>
            <br/>
            <h3>{anime.synopsis}</h3>
            <br />
            <h3>Episodes: {anime.episodes}</h3>
            <br />
            
            
        </div>
     
        
    )


        
}
            





export default Details