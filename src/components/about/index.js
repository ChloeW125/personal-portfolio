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
                <p>Hi! I'm Chloe, a second-year Computer Science student at the University of Waterloo. 
                    Happy to have you land on my page - whether on purpose or by accident!</p>
                <p>I'm passionate about building meaningful tech, with a strong interest in full-stack 
                    software development, machine learning, and project management. Right now, I'm working on two projects:</p>
                <ul>
                    <li>
                        An AI-powered plant doctor app that helps gardeners detect and treat plant diseases.
                    </li>
                    <li>
                        A machine learning-powered medical insurance prediction app, designed to help 
                        individuals estimate their fees and to serve as an opportunity for me to explore potential bias in ML algorithms and how to minimize it.
                    </li>
                </ul>
                <p>I’m also working as a Systems Developer with Environment and Climate Change Canada, where I:</p>
                <ul>
                    <li>
                        Organize task assignments for over 300 field technicians across Canada,
                    </li>
                    <li>
                        Visualize hydrometric data to help partners make confident, data-driven predictions, and
                    </li>
                    <li>
                        Explore building a RAG chatbot to support the Government of Canada and its partners in quickly accessing key hydrometric data information.
                    </li>
                </ul>
                <p>
                    When I'm not zealously developing software, I love gardening, long-distance running, reading (fantasy has my heart!), 
                    diving into manhwas, watching anime and K-dramas, and convincing my brother that Brooklyn Nine-Nine is, in fact, better than The Rookie.
                </p>
                <p>I'm just getting started in the tech world and excited to explore new roles and opportunities as I grow within the community. Feel free 
                    to reach out through the Contact page - I’d love to hear from you!</p>
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