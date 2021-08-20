import React from 'react'
import './main.css'

const Experience = () => {
    return (
        <div class='experience-container'>
            <ul class='indicator-container'>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
				<li class="indicator"></li>
			</ul>

			<h1 class="section-header">Experience</h1>
			<p class="intro">
				I have a long way to go, but for that reason, I am eager to get right
				into contributing to the technological space. Here are some of my
				favorite projects and, I look forward to many more. Cheers.
			</p>

			<ul class="card-container">
				<li class="glass-card card primary">
					<h1 class="card-title">Tic-Tac-Toe AI</h1>
					<p class="card-description">
						In this project, we dipped our toes into deep learning. We were
						given two weeks to implement any of the given branches of machine
						learning. It is not the most sophisticated project, but a memorable
						learning experience nonetheless.
					</p>
					<div class="card-content">video or project content</div>
				</li>
				<li class="glass-card card">
					<h1 class="card-title">Neural Net</h1>
					<p class="card-description">
						Learning the intricacies of neural networks was the first time I
						felt a true acquaintance with AI. It wasn't until recently that I
						have felt the desire to work closer with Neural Nets. In this
						project, we studied the effectiveness and deficiencies of activation
						functions.
					</p>
					<div class="card-content">video or project content</div>
				</li>
				<li class="glass-card card">
					<h1 class="card-title">Color Quantization</h1>
					<p class="card-description">
						Identifying and implementing efficiency is at the heart of our
						profession. A great illustration of this for me was this simple
						project. I can see how applying k-means clustering to other
						characteristics than just visuals is useful for memory management or
						even character identification.
					</p>
					<div class="card-content">video or project content</div>
				</li>
				<li class="glass-card card">
					<h1 class="card-title">v6File Reader</h1>
					<p class="card-description">
						Operating Systems was not even close to being one of my favorite
						classes, however, this final project was one I enjoyed. There is
						nothing special about it. It was simply, you understood how the
						v6File system was structured, or you did not. In addition, it is
						some of my cleanest code.
					</p>
					<div class="card-content">video or project content</div>
				</li>
			</ul>

			<div class="btn glass-card">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="github"
					class="github-icon"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
				>
					<path
						fill="currentColor"
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					></path>
				</svg>
				<a href="https://github.com/hiphip-jorge" class="btn-text">view all</a>
			</div>
        </div>
    )
}

export default Experience
