import  {useState, useEffect} from 'react'
import './App.css';
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Result from './components/Result'
import Details from './components/Details'
import { Routes, Route} from 'react-router-dom'


function App() {
  
  const [topAnime, setMyTopAnime] = useState([])
  const [results, setResults] = useState([])


  

  const GetMyTopAnime = async() => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json());
      console.log(temp)
    setMyTopAnime(temp.data.splice(0,3));
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
       
      <div className="content-wrapper">
        <Sidebar 
          topAnime={topAnime}
       />
      
      <Search 
          results={results} search = {GetResults}
        />
      </div> 
      
    
      <Routes>
           
           <Route path="/" element={<Result results={results} />} />
           
           <Route path="/details/:id" element={<Details />} />
           
      </Routes>

    </div>
    
  );
}

export default App;
