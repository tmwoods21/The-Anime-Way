import  {useState, useEffect} from 'react'
import './App.css';
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Result from './components/Result'


function App() {
  
  const [topAnime, setMyTopAnime] = useState([])
  const [results, setResults] = useState([])

  

  const GetMyTopAnime = async() => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json());
    setMyTopAnime(temp);
  }

  useEffect(() => {
    GetMyTopAnime();
    console.log("My Top Animes");
    
  }, []);


  const GetResults = async(query) => {
    //const temp = await fetch(`https://api.jikan.moe/v4/anime`)
      //.then(res => res.json());
    //setResults(temp);
    console.log(query)
    const URL = `https://api.jikan.moe/v3/search/anime?q=${query}&page=1`
    console.log(URL)
    const temp = await fetch(URL)
    .then(res => res.json());
    console.log(temp)
    setResults(temp.results)
  }

  useEffect(() => {
    console.log("Results")
    
  }, []);

  return (
    
    <div className="App">
       <Home />
       
       <div className="sidebar-wrapper">
        <Sidebar 
          topAnime={topAnime} 
       />
       <div className="search-wrapper">
        <Search 
          results={results} search = {GetResults}
        />
      
       </div>
       <div>
         <Result results={results} />
       </div>
       
       </div>
      


    </div>
  );
}

export default App;
