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
						<h2 className="sub-heading">AI & Machine Learning</h2>
						<h2 className="sub-heading">Web Development</h2>
						<h2 className="sub-heading">Graphic Designer</h2>
					</div>
					<i className='icon' class="uim uim-arrow-circle-down"></i>
				</div>
			</section>
		</div>
	);
};

export default Hero;
