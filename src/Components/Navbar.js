import React from 'react';
import './main.css';

const Navbar = () => {
	return (
		<>
			<div className='container'>
				<svg className="logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
					<defs>
						<style>
							{`.cls-1{fill:#1b1b1b;}.cls-2{fill:#5fe0b7;}.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-4{fill:#fff;}`}
						</style>
					</defs>
					<rect id="background" class="cls-1" x="29.69" y="49.92" width="936.77" height="936.77" rx="169.85"/>
					<g id="logo">
						<path class="cls-2" d="M733.83,199.08a122,122,0,1,1,0,244Z"/>
						<path class="cls-3" d="M562.72,123.9V655.46a502.38,502.38,0,0,1-3.6,62q-3.57,28.46-11.65,48.81a217.93,217.93,0,0,1-36.11,59.41A223.3,223.3,0,0,1,458,871.47C437.66,884,352.14,892.63,352.14,892.63l-.29,18.79s137.22,5.88,191.4-7.41c48.13-7.69,67.22-20,87.55-32.54a223.3,223.3,0,0,0,53.37-45.74,217.93,217.93,0,0,0,36.11-59.41q8.13-20.33,11.65-48.81a502.38,502.38,0,0,0,3.6-62V123.9Z"/><path class="cls-4" d="M408.46,123.9V652.49q0,88.44-55.91,88.42c-.22,0,.59-.1.37-.11l-2,170.59c1.94,0,4.76.32,6.72.32A280.29,280.29,0,0,0,435.47,901,270.07,270.07,0,0,0,503,871.47a223.3,223.3,0,0,0,53.37-45.74,217.93,217.93,0,0,0,36.11-59.41q8.13-20.33,11.65-48.81a502.38,502.38,0,0,0,3.6-62V123.9Z"/>
					</g>
				</svg>
				<h1 className='greeting'>Welcome</h1>
				<ul className='indicator-container'>
					<li class="indicator current"></li>
					<li class="indicator"></li>
					<li class="indicator"></li>
					<li class="indicator"></li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
