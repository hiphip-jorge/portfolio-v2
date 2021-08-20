import React, { Component } from 'react';
import './App.css';
import Education from './Components/Education';
import Hero from './Components/Hero';
import Experience from './Components/Experience';
import { GlobalStyle } from './globalStyle';
import WhatsNext from './Components/WhatsNext';
import Footer from './Components/Footer';

class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<Hero />
				<Education />
				<Experience />
				<WhatsNext />
				<Footer />
			</>
		);
	}
}

export default App;
