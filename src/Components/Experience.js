import React from 'react';
import './main.css';

const Experience = () => {
	return (
		<div class="experience-container">
			<ul class="indicator-container">
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

			<div class="backpack-container">
				<h1 class="backpack-title">Backpack</h1>
				<div class="backpack">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="python"
						class="svg-inline--fa fa-python fa-w-14 icon"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
						></path>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2500"
						height="873"
						viewBox="0 0 436.506 152.503"
						class="icon"
					>
						<g fill="hsl(var(--hue-color), 90%, 45%)">
							<path d="M51.465 0h23.871v110.496c-12.245 2.325-21.236 3.256-31.002 3.256C15.191 113.75 0 100.576 0 75.308c0-24.337 16.122-40.147 41.078-40.147 3.875 0 6.82.309 10.387 1.239V0zm0 55.62c-2.79-.929-5.115-1.239-8.061-1.239-12.091 0-19.067 7.441-19.067 20.461 0 12.712 6.666 19.687 18.912 19.687 2.635 0 4.806-.154 8.216-.619V55.62z" />
							<path d="M113.312 36.865v55.338c0 19.067-1.396 28.213-5.58 36.118-3.876 7.597-8.992 12.401-19.532 17.673l-22.167-10.541c10.541-4.961 15.656-9.3 18.911-15.968 3.411-6.819 4.497-14.726 4.497-35.497V36.865h23.871zM89.441.127h23.871v24.492H89.441V.127zM127.731 42.29c10.542-4.959 20.617-7.129 31.623-7.129 12.246 0 20.306 3.254 23.872 9.61 2.014 3.565 2.634 8.215 2.634 18.137v48.517c-10.697 1.55-24.182 2.636-34.102 2.636-19.996 0-28.988-6.978-28.988-22.478 0-16.743 11.936-24.493 41.233-26.974v-5.27c0-4.34-2.17-5.889-8.216-5.889-8.835 0-18.756 2.48-28.058 7.286l.002-18.446zm37.359 37.978c-15.812 1.55-20.928 4.03-20.928 10.231 0 4.649 2.946 6.819 9.456 6.819 3.566 0 6.82-.309 11.471-1.084l.001-15.966zM197.487 40.585c14.105-3.72 25.731-5.424 37.512-5.424 12.246 0 21.082 2.789 26.354 8.215 4.96 5.114 6.509 10.694 6.509 22.632v46.812H243.99V66.938c0-9.145-3.1-12.557-11.625-12.557-3.255 0-6.2.31-11.007 1.705v56.734h-23.871V40.585zM277.142 125.841c8.372 4.341 16.742 6.354 25.577 6.354 15.654 0 22.32-6.354 22.32-21.546v-.465c-4.649 2.324-9.301 3.255-15.5 3.255-20.927 0-34.26-13.796-34.26-35.651 0-27.129 19.688-42.474 54.564-42.474 10.231 0 19.688 1.084 31.158 3.409l-8.174 17.219c-6.355-1.24-.509-.166-5.312-.631v2.481l.309 10.074.154 13.022c.155 3.254.155 6.51.311 9.765v6.512c0 20.461-1.705 30.071-6.819 37.977-7.441 11.627-20.308 17.361-38.599 17.361-9.301 0-17.359-1.395-25.731-4.65l.002-22.012zm47.434-71.305h-2.479c-4.649-.155-10.074 1.084-13.796 3.409-5.734 3.256-8.682 9.147-8.682 17.517 0 11.937 5.893 18.757 16.433 18.757 3.255 0 5.891-.621 8.989-1.55v-8.215c0-2.791-.153-5.893-.153-9.146l-.154-11.005-.156-7.906-.002-1.861zM398.062 34.85c23.871 0 38.443 15.037 38.443 39.373 0 24.958-15.19 40.614-39.373 40.614-23.873 0-38.6-15.037-38.6-39.218.002-25.114 15.194-40.769 39.53-40.769zm-.467 60.764c9.146 0 14.572-7.596 14.572-20.772 0-13.02-5.271-20.771-14.415-20.771-9.457 0-14.884 7.597-14.884 20.771.002 13.177 5.428 20.772 14.727 20.772z" />
						</g>
					</svg>
					<i class="uim uim-html5 icon"></i>
					<i class="uim uim-css3 icon"></i>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="git-alt"
						class="svg-inline--fa fa-git-alt fa-w-14 icon"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"
						></path>
					</svg>
					<i class="uim uim-github-alt icon"></i>
					<i class="uim uim-gitlab-alt icon"></i>
					<i class="uim uim-react icon"></i>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="js-square"
						class="svg-inline--fa fa-js-square fa-w-14 icon"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
						></path>
					</svg>
				</div>
			</div>

			<ul class="card-container">
				<li class="glass-card card primary">
					<h1 class="card-title">Tic-Tac-Toe AI</h1>
					<p class="card-description">
						In this project, we dipped our toes into deep learning. We were
						given two weeks to implement any of the given branches of machine
						learning. It is not the most sophisticated project, but a memorable
						learning experience nonetheless.
					</p>
					{/* <div class="card-content">video or project content</div> */}
				</li>
				<li class="glass-card card">
					<h1 class="card-title">Neural Net</h1>
					<p class="card-description">
						Learning the intricacies of neural networks was the first time I
						felt a true understanding of modern AI. It wasn't until recently
						that I have felt the desire to work closer with Neural Nets. In this
						project, we studied the effectiveness and deficiencies of activation
						functions.
					</p>
					{/* <div class="card-content">video or project content</div> */}
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
					{/* <div class="card-content">video or project content</div> */}
				</li>
				<li class="glass-card card">
					<h1 class="card-title">v6File Reader</h1>
					<p class="card-description">
						Operating Systems was not even close to being one of my favorite
						classes, however, this final project was one I enjoyed. For once, I
						spent more time doing research and familiarizing myself with the
						filing system rather than coding. In addition, it is some of my
						cleanest code.
					</p>
					{/* <div class="card-content">video or project content</div> */}
				</li>
			</ul>

			<a className="gh-btn" href="https://github.com/hiphip-jorge">
				<i class="uim uim-github"></i>
				<h3>view all</h3>
			</a>
		</div>
	);
};

export default Experience;
