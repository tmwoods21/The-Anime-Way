import {Link} from 'react-router-dom'

function Result(props){
    const {results} = props
    
        return(
            <div className="anime-list" >
            {results.map((anime, index)=>{
                return(
              
            
               !anime ? <h3>loading anime</h3> : 
                <div className="card" key={index}>
                    <h3>{anime.title}</h3>
                    <Link to={`/details/${anime.mal_id}`}><img src={anime.image_url}></img></Link>
                    {/* <h3>{anime.synopsis}</h3>
                    <h3>{anime.episodes}</h3> */}
                
                </div>
               
               
          
                )

        
    })}
     </div> 
        ) 
}


export default Result