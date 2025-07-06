import './index.scss'
import AnimatedLetters from '../animatedLetters'
import { useState, useEffect } from 'react'
import ProjectCard from '../projectCard'

const projects= [
    {
    title: 'Work Planning Tool',
    description: "A full-stack web application to help a team of over 200 hydrometric data engineers organize the maintenance, curation, and processing of incoming hydrometric data in a clean and efficient way for Environment and Climate Change Canada and it's partners.",
    image: '/images/weather-app.png',
    link: 'https://your-weather-app-link.com',
    tags: ['Python', 'Flask', 'APIs', 'Timeseries Data', 'SQL', 'MariaDB', 'AWS'],
    color: '#f9e0dc',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React.',
    image: '/images/portfolio.png',
    link: 'https://your-portfolio-link.com',
    tags: ['React', 'Portfolio', 'Design'],
    color: '#dcecf9',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React.',
    image: '/images/portfolio.png',
    link: 'https://your-portfolio-link.com',
    tags: ['React', 'Portfolio', 'Design'],
    color:'#c2f5d1',
  },
]

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
    
            return () => clearTimeout(timer)
        }, [])
    
    return (
        <div className="container projects-page">
            <div className="section-title">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"Projects And Experiences".split("")}
                        idx={15}/>
                </h1>
            </div>
            <div className="projects-display">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    link={project.link}
                    color={project.color}
                    />
                ))}
            </div>
            {/* <Logo /> */}
        </div>
    )
}

export default Projects