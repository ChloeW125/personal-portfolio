import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faHtml5, faCss3, faJsSquare, faGitAlt  } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../animatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"About Me".split("")}
                        idx={15}/>
                </h1>
                <p>Hi! I'm a ......</p>
                <p>Draft intro description here :D</p>
            </div>
            <div className="stage-cube-container">
                <div className="cubespinner">
                    <div className='face1'>
                        <FontAwesomeIcon icon={ faReact } color="#61dbfb" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={ faPython } color="#" />
                    </div>
                     <div className='face3'>
                        <FontAwesomeIcon icon={ faHtml5 } color="#F06529" />
                    </div>
                     <div className='face4'>
                        <FontAwesomeIcon icon={ faCss3 } color="#28A4D9" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={ faJsSquare } color="#f7df1e" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={ faGitAlt } color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About