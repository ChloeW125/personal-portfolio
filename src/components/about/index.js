import AnimatedLetters from '../animatedLetters'
import './index.scss'

const About = () => {
    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        strArray={"About Me".split("")}
                        idx={15}/>
                </h1>
                <p>Hi! I'm a ......</p>
                <p>Draft intro description here :D</p>
            </div>
        </div>
    )
}

export default About