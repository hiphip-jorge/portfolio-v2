import React from 'react'
import './main.css'
import logolight from '../images/JP-Logo_light-mode.svg'

const Footer = () => {
    return (
        <div class='footer-container'>
            <h1 class='ciao'>Thank you for your time. 👍</h1>
			<button class="btn glass-card">say hi! 👋</button>
            <div class='contacts'>
                <a className='footer-a insta' href="https://www.instagram.com/hiphip_jorge__/">
                    Instagram
                </a>
                <a className='footer-a' href="mailto:perez.j1477@gmail.com">
                    perez.j1477@gmail.com
                </a>
            </div>
            <div class='conclusion'>
                <a href='https://jorgeperez.me/'><img src={logolight} class='logo-light' alt='logo'/></a>
                <h3 class="version">portfolio.v.01</h3>
                <h3 class="version">© 2021 Jorge Perez. All right reserved.</h3>
            </div>
        </div>
    )
}

export default Footer
