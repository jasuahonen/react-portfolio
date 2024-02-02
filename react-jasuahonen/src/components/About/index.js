import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  const myAnimation = async () => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
};

useEffect(() => {
 myAnimation();
});


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious 2nd year Software Engineering student looking for my place in the Tech-Industry.
            Alongside school work I create projects, like this React-portfolio, to showcase my skills and pinpoint my interests.
            Besides React, my current interests are displayed in the spinning cube on your right!
          </p>
          <p align="LEFT">
            By constantly keeping myself busy on new projects my learning-curve has been steep. I will be
            adding my projects on this page once they are in a deployable state, stay posted.
          </p>
          <p>
            If I need to define myself in one sentence that pretty much be: "Dog-dad, a sports fanatic,
            golf-maniac, and tech-obsessed!"
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="Dark-red" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="Red" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="Blue" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="Light-blue" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="Yellow" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="Black" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About