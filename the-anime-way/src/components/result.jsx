import {Link} from 'react-router-dom'

function Result(props){
    const {results} = props
    
        return(
            results.map((anime, index)=>{
                return(
                    <div key={index}>
               {!anime ? <h3>loading anime</h3> : 
                <div className="card">
                    <h3>{anime.title}</h3>
                    <Link to={`/details/${anime.mal_id}`}><img src={anime.image_url}></img></Link>
                    <h3>{anime.synopsis}</h3>
                    <h3>{anime.episodes}</h3>
                
                </div>
               }
               
           </div> 
                )

        
    })
        ) 
}


export default Result