import '../App.css'
import { meme } from '../data/memeData';
import { useMeme } from '../context/MemeProvider';

const Meme = () => {

    const {randomNum} = useMeme()
    return(
        <div className="container">
      <div className="card ">
          <img className='object-scale-down' src={meme[randomNum].url} alt={meme[randomNum].name} />
      </div>
      </div>
    )
}
export default Meme;