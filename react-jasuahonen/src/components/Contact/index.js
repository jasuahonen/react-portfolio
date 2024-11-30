import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']

  const myAnimation = async () => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
};

useEffect(() => {
 myAnimation();
});

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I am interested in IT-related job opportunities - especially on Junior or on Entry-level.
            However, if you have any other questions, don't hesitate to contact me using below form.
            <br />
            <br />
            Jasu Ahonen | +358 50 3067267 | jasu.ahonen@outlook.com
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
        <iframe className="mapping" title="kaleva" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7615.856777443109!2d23.789817919095913!3d61.49693719991432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf5864f16c95%3A0x2600b5523c196b31!2sKaleva%2C%2033540%20Tampere!5e0!3m2!1sen!2sfi!4v1706911824043!5m2!1sen!2sfi">
        </iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact