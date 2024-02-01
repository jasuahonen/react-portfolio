import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','J', 'a', 's', 'u',',']
    const jobArray1 = ['S','o','f','t','w','a','r','e',' ']
    const jobArray2 = ['E','n','g','i','n','e','e','r',' ']


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
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray1}
                idx={21}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray2}
                idx={30}/>
                </h1>
                <h2> Student at Tampere University of Applied Sciences </h2>
                <Link to="/contact" className='flat-button'> Contact Me </Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
        )
    }

export default Home