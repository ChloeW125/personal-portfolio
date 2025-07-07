import './index.scss'
import AnimatedLetters from '../animatedLetters'
import { useState, useEffect } from 'react'
import ProjectCard from '../projectCard'

const projects= [
    {
    title: '📋 Work Planning Tool',
    description: "A full-stack web application to help a team of over 200 hydrometric data engineers organize the maintenance, curation, and processing of incoming hydrometric data in a clean and efficient way for Environment and Climate Change Canada and it's partners.",
    link: 'Project not publicly available :/',
    tags: ['Python', 'Flask', 'APIs', 'Timeseries Data', 'SQL', 'MariaDB', 'AWS'],
    color: '#f9e0dc',
  },
  {
    title: '🌱 Plant Doc',
    description: 'A machine-learning-powered app to help gardeners diagnose and treat plant diseases and get garden care tips and insights.',
    link: 'https://github.com/ChloeW125/plantDocProject',
    tags: ['Neural Networks', 'Streamlit', 'FastAPI', 'Large Datasets', 'Python', 'TensorFlow', 'Numpy', 'scikit-learn'],
    color: '#dcecf9',
  },
  {
    title: '📈 ML Prediction Project',
    description: 'ML Project to gain practical experience developing an ML project pipeline.',
    link: 'https://github.com/ChloeW125/MLPredictionModel',
    tags: ['Python', 'scikit-learn', 'Regression Models', 'Transformers', 'Data Cleaning and Preprocessing'],
    color:'#c2f5d1',
  },
  {
    title: '🤖 Government Hydrometric Data Chatbot Exploration',
    description: "Project to research and develop a chatbot to help the Government of Canada and it's partners gain vital hydrometric information quickly, effectively, and securely.",
    link: 'Project not publicly available :/',
    tags: ['Python', 'LangChain', 'RAG', 'Selenium', 'Vector Stores'],
    color:'#f0e6fc',
  },
  {
    title: '💻 Personal Portfolio',
    description: "The very website you're looking at right now!",
    link: 'https://your-portfolio-link.com',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Web Design'],
    color:'#f4f5c2',
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