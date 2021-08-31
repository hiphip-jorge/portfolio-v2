import React from 'react'
import './main.css'
import square from '../images/square-regular.svg'

const WhatsNext = () => {
    return (
        <div class='whats-next-container'>
            <ul class='indicator-container'>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
			</ul>

			<h1 class="section-header">What I'm Up To</h1>
			<div class='todo-list'>
				<h2 class='todo-title'>Personal Development</h2>
				<ul class="todo">
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Reading "An Introduction to Statistical Learning"</li>
					</div>	
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Cycling through data structures and algorithms material</li>
					</div>
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Python for Data Science and ML Bootcamp</li>
					</div>
				</ul>

				<h2 class='todo-title'>This site</h2>
				<h3 class='todo-sub'>Version 3</h3>
				<ul class="todo">
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Animations!</li>
					</div>
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Add relavent socials</li>
					</div>
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Add like button and feedback section.</li>
					</div>
				</ul>
				<h3 class='todo-sub'>Version 4</h3>
				<ul class="todo">
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Think of valuable content for this site</li>
					</div>
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Add a backend for this list and other content</li>
					</div>
				</ul>
				
				<h2 class='todo-title'>Other</h2>
				<ul class="todo">
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Web App for a restuarant that displays their business information and products</li>
					</div>
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Learning French</li>
					</div>
					<div class='line'>
						<img class='box' src={square} alt='box'/>
						<li class='list-item'>Bettering my uke skills (;</li>
					</div>
				</ul>
			</div>
        </div>
    )
}

export default WhatsNext
