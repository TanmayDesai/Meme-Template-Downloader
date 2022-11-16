import '../App.css'
import Navbar from './Navbar'
import Meme from './Meme'
import Footer from './Footer'

const Container = () => {
    return(
    <div className="a bg-neutral-200">
    <Navbar />
    <Meme />
    <Footer />
    </div>
    )
}

export default Container