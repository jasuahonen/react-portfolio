import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo_s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link
            className='logo'
            to='/'
            onClick={() => setShowNav(false)}
        >
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="j" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''} >
            <NavLink
                exact="true"
                activeclassname="active"
                to="/"
                onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>

            <NavLink
                exact="true"
                activeclassname="active"
                className='about-link'
                to="/about"
                onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>

            <NavLink
                exact="true"
                activeclassname="active"
                className='contact-link'
                to="/contact"
                onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/jasu-ahonen"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/jasuahonen"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/jasuahonen"
                >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" className="anchor-icon" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
    )
}

// sidebar 11:30
export default Sidebar