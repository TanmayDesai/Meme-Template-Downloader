import '../App.css'
import { useMeme } from '../context/MemeProvider'

const Navbar = () => {
    const {generateRandom, downloadImage } = useMeme()
    return(
    <div className="py-2  px-5 md:flex-row md:py-5 flex flex-col content-center justify-between bg-[#ffffff] navbar">
      <div className='text-4xl py-4 self-center md:text-4xl md:py-0 md:font-light'>Meme Templates</div>
      <div className="flex flex-row pb-6 md:pb-0">
      <button onClick={generateRandom} className="px-2 py-2 mx-2 text-white bg-purple-600 rounded-md hover:bg-purple-400 hover:text-black">Show another Meme</button>
      <button onClick={downloadImage} className="px-2 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-400 hover:text-black">Download this Meme</button>
      </div>
    </div>
    )
}

export default Navbar