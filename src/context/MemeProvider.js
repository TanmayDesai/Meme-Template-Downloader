import { meme } from "../data/memeData";
import { createContext, useContext } from "react";
import { useState } from "react";
import {saveAs} from 'file-saver'


const MemeContext = createContext('')

export const useMeme = () => {
    return useContext(MemeContext)
}

const MemeProvider = ({children}) => {
    
    const[randomNum, setRandomNum] = useState(0)
    const num = meme.length
    const generateRandom = () =>{
      setRandomNum(Math.floor(Math.random()*num))
    }
    
    const downloadImage = () => {
      saveAs(meme[randomNum].url, `${meme[randomNum].name}.jpg`)
    }

    return(
        <MemeContext.Provider value={{randomNum, generateRandom, downloadImage}}>
            {children}
        </MemeContext.Provider>
    )
}

export default MemeProvider