import React from 'react'
import './main.css'
import utd from '../images/utd-courtyard.png'

const Education = () => {
    return (
        <section className='education-container'>
            <ul className='indicator-container'>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
				<li class="indicator"></li>
				<li class="indicator"></li>
			</ul>

			<h1 class="section-header">Education</h1>
			<p class="intro dark">
				I had quite an undergraduate journey going from Collin College to Baylor
				University and reaching my final home, UTD. Here are some of the courses
				that encouraged my development of computer science and software
				engineering.
			</p>

			<div class='university-container'>
				<img className='utd' src={utd} alt="utd courtyard" />

				<div class="degree-container">
					<h3 className='year'>Fall 2020</h3>
					<div className='icon-line'>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="university"
							class="svg-inline--fa fa-university fa-w-16 fa-icon"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"
							></path>
						</svg>
						<h1 className='icon-line-text'>University of Texas at Dallas</h1>
					</div>
					<div className='icon-line'>
						<svg
							className="fa-icon"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="project-diagram"
							class="svg-inline--fa fa-project-diagram fa-w-20 fa-icon"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
						>
							<path
								fill="currentColor"
								d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
							></path>
						</svg>
						<h1 className='icon-line-text'>B.S. in Software Engineering</h1>
					</div>
				</div>

			</div>

			<div class="fav-courses">
				<h1 class="fav-course-title">Favorite Courses</h1>
				<ul class="course-cards">
					<li class="course">
						<svg
							class="brain"
							width="58"
							height="58"
							viewBox="0 0 58 58"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="58" height="58" rx="15" fill="#FFD3D3" />
							<path
								d="M23.4444 10.72C21.3681 10.72 19.6458 12.1582 19.1528 14.1016C19.0972 14.1016 19.0556 14.0876 19 14.0876C16.5486 14.0876 14.5556 16.1012 14.5556 18.5778C14.5556 18.9145 14.5972 19.2443 14.6736 19.56C12.6458 20.4019 11.2222 22.4085 11.2222 24.7518C11.2222 25.6358 11.4444 26.4566 11.7986 27.2003C10.1319 28.1685 9 29.9646 9 32.0483C9 34.3846 10.4167 36.3911 12.4306 37.233C12.3681 37.5558 12.3333 37.8855 12.3333 38.2223C12.3333 41.0146 14.5694 43.2737 17.3333 43.2737C17.6181 43.2737 17.8958 43.2386 18.1667 43.1895C18.8333 45.1891 20.6806 46.6414 22.8889 46.6414C25.6528 46.6414 27.8889 44.3822 27.8889 41.5899V15.2101C27.8889 12.7335 25.8958 10.72 23.4444 10.72ZM49 32.0483C49 29.9646 47.8681 28.1685 46.2014 27.2003C46.5625 26.4566 46.7778 25.6358 46.7778 24.7518C46.7778 22.4085 45.3542 20.4019 43.3264 19.56C43.3958 19.2443 43.4444 18.9145 43.4444 18.5778C43.4444 16.1012 41.4514 14.0876 39 14.0876C38.9444 14.0876 38.8958 14.1016 38.8472 14.1016C38.3542 12.1582 36.6319 10.72 34.5556 10.72C32.1042 10.72 30.1111 12.7265 30.1111 15.2101V41.5899C30.1111 44.3822 32.3472 46.6414 35.1111 46.6414C37.3194 46.6414 39.1667 45.1891 39.8333 43.1895C40.1042 43.2386 40.3819 43.2737 40.6667 43.2737C43.4306 43.2737 45.6667 41.0146 45.6667 38.2223C45.6667 37.8855 45.6319 37.5558 45.5694 37.233C47.5833 36.3911 49 34.3846 49 32.0483Z"
								fill="#EB0000"
							/>
						</svg>
						<div class="course-container">
							<h2 class='course-title'>machine learning</h2>
							<p class='course-description'>
								Machine learning was an electoral course for me, and boy, am I
								glad in my selection. Not only was I introduced to the world of
								machine learning, but I was also allowed to improve my python
								with libraries like Numpy and Pandas. I look forward to diving
								deeper.
							</p>
						</div>
					</li>
					<li class="course">
						<svg
							width="58"
							height="58"
							viewBox="0 0 58 58"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="58" height="58" rx="15" fill="#CCFFEC" />
							<path
								d="M48.9974 27.8944C48.9693 27.8105 48.9131 27.7639 48.8662 27.708L42.3071 24.11C42.2228 24.0541 42.1197 24.0541 42.0166 24.11L36.4976 27.4656C36.4132 27.5216 36.3664 27.6241 36.3664 27.708L36.2821 30.6348L34.0332 29.1434C33.9489 29.0875 33.8177 29.0875 33.7427 29.1434L30.5006 31.1195L30.3695 27.8478C30.3695 27.7639 30.3132 27.6614 30.2383 27.6334L26.865 25.3684L30.0228 23.7465C30.1258 23.6906 30.1821 23.588 30.1821 23.4762L29.648 11.1443C29.648 11.0604 29.5636 10.9579 29.4887 10.902L20.9993 6.82862C20.9149 6.80066 20.84 6.80066 20.7837 6.80066L9.19281 10.3986C9.06163 10.4545 8.9773 10.585 9.00541 10.7435L11.5728 23.1499C11.6572 23.4669 14.7587 25.7039 15.1897 26.0302L12.6692 27.2326C12.538 27.3165 12.4818 27.447 12.5099 27.5495L14.4401 36.8986C14.4963 37.1689 16.6609 39.0518 16.9794 39.3501L15.349 40.3381C15.2647 40.3941 15.1897 40.5245 15.2178 40.6271C15.349 41.2889 16.6609 47.8696 16.8014 48.0001L22.9014 54.441C22.9576 54.4969 23.0326 54.4969 23.1169 54.5249C23.1731 54.5249 23.22 54.4969 23.2762 54.469L31.1191 48.2331C31.2034 48.1772 31.2222 48.1026 31.2222 48.0187L31.0347 43.731L33.6584 45.9401C33.7615 46.024 33.9301 46.024 34.0332 45.9401L40.3019 40.9626C40.3862 40.9067 40.4049 40.8321 40.4049 40.7483L40.6205 37.635L42.5226 38.94C42.6257 39.0238 42.7662 39.0238 42.8693 38.94L47.9854 34.8666C48.0417 34.8387 48.0885 34.7641 48.0885 34.6802C48.1728 34.0743 49.0536 28.0808 48.9974 27.8944ZM29.8073 28.3418L30.1821 36.9732L21.6927 42.6777L20.3808 33.6735L29.8073 28.3418ZM29.0857 11.5638L29.5917 23.3084L19.6031 28.4723L17.7572 15.9074L29.0857 11.5638ZM12.1351 22.9356L9.6988 11.2748L17.1669 15.8795L18.9847 28.2672L12.1351 22.9356ZM15.0023 36.7122L13.2314 28.2393L19.7905 33.6735L21.0742 42.3795L15.0023 36.7122ZM17.2793 47.6832L15.9956 41.4287L21.777 47.1053L22.6859 53.3877L17.2793 47.6832ZM23.3231 53.6953L22.3298 47.0866L30.3601 41.3634L30.6506 47.8882L23.3231 53.6953ZM31.0066 42.9667C31.0066 42.6498 31.091 40.8321 30.8192 40.6271L28.5423 38.7629L30.6318 37.374C30.8473 37.2155 30.7349 36.8427 30.7349 36.6283L33.4897 38.7349L33.546 45.1012L31.0066 42.9667ZM39.8427 40.5991L34.1363 45.1292L34.0801 38.7349L40.2363 34.3633L39.8427 40.5991ZM42.4383 38.2036L40.6486 36.9546L40.836 33.7854C40.8641 33.7015 40.8079 33.5989 40.7329 33.543L36.8724 31.0077L36.9286 28.2113L42.9818 31.9957L42.4383 38.2036ZM47.5544 34.4938L43.0286 38.0638L43.5627 31.9957L48.3509 28.5842L47.5544 34.4938Z"
								fill="#005B3A"
							/>
						</svg>
						<div class="course-container">
							<h2 class='course-title'>d.s. & algorithms</h2>
							<p class='course-description'>
								Most of my favor towards this course mostly had to do with the
								simplification by the instructor. Nonetheless, these
								fundamentals will be present in everyday work. I will have to
								revisit the material in this course for the rest of my career.
							</p>
						</div>
					</li>
					<li class="course">
						<svg
							width="58"
							height="58"
							viewBox="0 0 58 58"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="58" height="58" rx="15" fill="#FFF4D6" />
							<path
								d="M21.5 31.4071H17.125C16.7797 31.4071 16.5 31.1272 16.5 30.7816V29.5308C16.5 29.1853 16.7797 28.9054 17.125 28.9054H21.5V23.9021H17.125C16.7797 23.9021 16.5 23.6222 16.5 23.2767V22.0258C16.5 21.6803 16.7797 21.4004 17.125 21.4004H21.5V16.3971H17.125C16.7797 16.3971 16.5 16.1172 16.5 15.7717V14.5208C16.5 14.1753 16.7797 13.8954 17.125 13.8954H21.5V11.3938C21.5 10.0124 20.3805 8.89209 19 8.89209H11.5C10.1195 8.89209 9 10.0124 9 11.3938V46.417C9 46.6336 9.07109 46.8267 9.12266 47.0268L21.5 34.642V31.4071ZM46.5 36.4104H44V40.7883C44 41.1338 43.7203 41.4137 43.375 41.4137H42.125C41.7797 41.4137 41.5 41.1338 41.5 40.7883V36.4104H36.5V40.7883C36.5 41.1338 36.2203 41.4137 35.875 41.4137H34.625C34.2797 41.4137 34 41.1338 34 40.7883V36.4104H29V40.7883C29 41.1338 28.7203 41.4137 28.375 41.4137H27.125C26.7797 41.4137 26.5 41.1338 26.5 40.7883V36.4104H23.268L10.8906 48.796C11.0906 48.8476 11.2844 48.9187 11.5 48.9187H46.5C47.8805 48.9187 49 47.7984 49 46.417V38.912C49 37.5307 47.8805 36.4104 46.5 36.4104Z"
								fill="#FBBC05"
							/>
						</svg>
						<div class="course-container">
							<h2 class='course-title'>project planning</h2>
							<p class='course-description'>
								There were many stories shared in this course by the instructor
								to illustrate the bittersweet life of a project manager. I would
								love to journey through the scrambles of a project as the leader
								in the later part of my career, after some experience.
							</p>
						</div>
					</li>
				</ul>
			</div>
            
        </section>
    )
}

export default Education
