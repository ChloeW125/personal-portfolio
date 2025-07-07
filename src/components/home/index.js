import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cLetter from '../../assets/images/c.png';
import AnimatedLetters from '../animatedLetters';
// import Logo from './logo'
import './index.scss';

const Home  = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'C', 'h', 'l', 'o', 'e']
    const titleArray = "Aspiring software developer".split("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                {/* <img src={cLetter} alt="developer" /> */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={titleArray}
                idx={22}/>
                </h1>
                <div className="badges">
                    <span className="badge">Full-Stack Dev</span>
                    <span className="badge">ML Enthusiast</span>
                    <span className="badge">Bookworm 📚</span>
                </div>
                {/* <Link to="/contact" className='flat-button'>CONTACT ME</Link> */}
            </div>
            {/* <Logo /> */}
        </div>
    )
}

export default Home