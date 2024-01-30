import './index.scss'
import LogoJ from '../../../assets/images/logo_j.png'
import { useRef } from 'react'

const Logo= () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className='logo-container' >
            <img className='solid-logo' src={LogoJ} alt="J" />
            <svg
            width="1587"
            height="2245"
            version="1.0"
            viewBox="0 0 1190.25 1683.749945"
            xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className='svg-container'
                transform='translate(0 457) scale(.1-.1)'
                fill='none'
                >
                    <path d="M 54 0.40625 L 1091.960938 0.40625 L 1091.960938 1590 L 54 1590 Z M 54 0.40625 "/>
                </g>
            </svg>
        </div>
    )
}

export default Logo