import React from 'react';
import Navbar from './Navbar';
import './main.css';
// import without_me from '../images/hero-no_words.png'
// import with_me from '../images/hero.svg'

const Hero = () => {
	return (
		<div className="main-container">
			<Navbar />
			<section class="hero-content">
				{/* <div class='hero-imgs'>
					<img class='brushes' src={without_me} alt='brushes'/>
					<img class='brushes-n-me' src={with_me} alt='brushes'/>
				</div> */}
				<div class="content-container">
					<h1 className="name">Jorge</h1>
					<div class="sub-h2-container">
						<h2 className="sub-heading">Software Engineer</h2>
						<h2 className="sub-heading">Graphic Designer</h2>
						<h2 className="sub-heading">AI and ML</h2>
						<h2 className="sub-heading">WebDev</h2>
					</div>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="arrow-alt-circle-down"
						class="svg-inline--fa fa-arrow-alt-circle-down fa-w-16"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"
						></path>
					</svg>
				</div>
			</section>
		</div>
	);
};

export default Hero;
