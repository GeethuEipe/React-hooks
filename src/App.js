import{useState,useEffect} from 'react'
import {LoadImages,SearchImages} from './components/api'
import './App.css';
import Image from './components/image'
function App() {
  const [query, setQuery]=useState()
  const [searchQ, setSearch] = useState()
  const data=LoadImages();
  const search=() =>{
    setSearch(query)
  }
  const searchData=SearchImages(searchQ);
  console.log(searchData)
  return (
    <div className="App">
      <div>
        <label><h2>Image Search: </h2></label>
        <input type="text" onChange={(event)=>setQuery(event.target.value)} placeholder="search image......"/>
        <button onClick={search}>Search</button>
      </div>
      <div className="contain">
        {searchQ ? searchData.map((img, key)=>(
          <Image src={img.urls.thumb} key={key} />
        )): data.map((img, key)=>(
          <Image src={img.urls.thumb} key={key}/>
        ))}
      </div>
      </div>
      
  );
}

export default App;
