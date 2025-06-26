import { Link } from 'react-router-dom';
import cLetter from '../../assets/images/c.png';
import './index.scss';

const Home  = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={cLetter} alt="developer" />
                hloe
                <br/>
                Aspiring software developer
                </h1>
                <h2>Full-Stack Developer / Machine Learning Enthusiast / Book Connoiseur</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home