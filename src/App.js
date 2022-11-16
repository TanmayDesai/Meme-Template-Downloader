import { meme } from "./data/memeData";
import './App.css'
import { useEffect, useState } from "react";
import {saveAs} from 'file-saver'

function App() {


  const[randomNum, setRandomNum] = useState(0)
  const num = meme.length
  const generateRandom = () =>{
    setRandomNum(Math.floor(Math.random()*num))
  }
  
  const downloadImage = () => {
    saveAs(meme[randomNum].url, `${meme[randomNum].name}.jpg`)
  }


  return (
    <div className="a bg-slate-900">
    <div className="py-2 px-5 md:flex-row flex flex-col content-center justify-between bg-slate-200 navbar">
      <div className='text-2xl py-4 self-center md:text-4xl md:py-0'>Meme Templates</div>
      <div className="">
      <button onClick={generateRandom} className="px-2 py-2 mx-2 text-white bg-purple-600 rounded-md hover:bg-purple-400 hover:text-black">Show another Meme</button>
      <button onClick={downloadImage} className="px-2 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-400 hover:text-black">Download this Meme</button>
      </div>
    </div>
    <div className="container">
      <div className="card ">
          <img className='object-scale-down' src={meme[randomNum].url} alt={meme[randomNum].name} />
      </div>
      </div>
    </div>
    
  );
}

export default App;
