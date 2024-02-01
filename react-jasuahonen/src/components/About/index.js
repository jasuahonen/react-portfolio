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
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
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