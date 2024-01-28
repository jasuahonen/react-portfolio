import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo_j2.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 's', 'u',',']
    const jobArray1 = ['S','o','f','t','w','a','r','e',' ']
    const jobArray2 = ['E','n','g','i','n','e','e','r','i','n','g',' ']
    const jobArray3 = ['S','t','u','d','e','n','t']

    const myAnimation = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    };

    useEffect(() => {
     myAnimation();
    });

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray1}
                idx={19}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray2}
                idx={28}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray3}
                idx={40}/>
                </h1>
                <h2> Tampere University of Applied Sciences </h2>
                <Link to="/contact" className='flat-button'> Contact Me </Link>
            </div>

        </div>
    )
    };

export default Home