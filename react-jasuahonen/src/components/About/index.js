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
            I’m an ambitious 3rd-year Software Engineering student eager to find my place in the tech industry.
            Beyond my coursework, I dedicate time to creating projects—like this React portfolio—to highlight my skills
            and explore my passions.
          </p>
          <p>
            My current interests, showcased in the spinning cube,
            extend beyond React and reflect my drive to stay at the forefront of technology.
            By consistently working on new projects, I’ve embraced a steep learning curve and continue to grow rapidly.
          </p>
          <p>
            As I refine and finalize my work, I’ll be sharing my projects here—so stay tuned!
          </p>
          <p>
            If I had to sum myself up in one sentence:
            "Father of a beautiful boy, sports-fanatic, tech-enthusiast, and a golf-addict!"
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