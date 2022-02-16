import React from 'react'

function Sidebar(props){

    const {topAnime} = props
    return(
        <aside>
            <nav>
                <div className='top3'><h3>My Top 3 Anime</h3></div>
                {topAnime.map((anime, index)=>{
                    return(
                        
                        <ul>
                        <a 
                            
                            href={anime.url}
                            key={anime.mal_id}
                            target="_blank" 
                            rel="noreferrer">
                            {anime.title}
                        </a>
                        <br></br>
                        </ul>
                    
                    )

                    

                })}

                    
                
                <br></br>
                
            </nav>
        </aside>
    )
}


export default Sidebar