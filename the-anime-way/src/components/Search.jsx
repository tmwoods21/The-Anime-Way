function Search(props){
    console.log(props.results)
    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.elements.query.value)
        props.search(e.target.elements.query.value)
        
    }
    return(
       <div>
           <h3>Search for Animes</h3>
           <form onSubmit={handleSubmit}>
           <input name="query" type="search"  />
           <button>Search Anime</button>
           </form>

           
       </div>
    )
}




export default Search
