import  {useState, useEffect} from 'react'
import './App.css';
import Search from './components/Search'
import Sidebar from './components/Sidebar'


function App() {
  
  const [topAnime, setMyTopAnime] = useState([])
  

  const GetMyTopAnime = async() => {
    const temp = await fetch(``)
      .then(res => res.json());
    setMyTopAnime(temp);
  }

  useEffect(() => {
    GetMyTopAnime();
    console.log("My Top Animes");
    
  }, []);

  console.log(topAnime);


  return (
    <div className="App">
       <h1>The Anime Way</h1>
       
       <div className="sidebar-wrapper">
        <Sidebar 
          topAnime={topAnime} 
       />
       <div className="search-wrapper">
        <Search />
       </div>
       
       </div>


    </div>
  );
}

export default App;
