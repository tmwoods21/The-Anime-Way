function Result(props){
    const {results} = props
    
        return(
            results.map((anime, index)=>{
                return(
                    <div key={index}>
               {!anime ? <h3>loading anime</h3> : 
               <div>
                <h3>{anime.title}</h3>
                <h3>{anime.synopsis}</h3>
                </div>
               }
               
           </div> 
                )

        
    })
        ) 
}


export default Result