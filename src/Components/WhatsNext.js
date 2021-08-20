import React from 'react'
import './main.css'

const WhatsNext = () => {
    return (
        <div class='whats-next-container'>
            <ul class='indicator-container'>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
				<li class="indicator current"></li>
			</ul>

			<h1 class="section-header">What's Next</h1>
			<h2>For Me</h2>
			<p>
				Currently, I am reviewing my data structures. I like to improve upon my
				fundamentals and seek areas that I overlooked in my first go-around. In
				addition, I am going over the introduction to ML and diving deeper with
				more intensive projects.
			</p>

			<h2>For this site</h2>
			<h3>Version 2</h3>
			<ul class="todo">
				<li class='list-item'>Animations!</li>
				<li class='list-item'>
					Add missing content to projects in the form of looping video on hover
				</li>
			</ul>
			<h3>Version 3</h3>
			<ul class="todo">
				<li class='list-item'>Improve content on this section and footer</li>
				<li class='list-item'>Add socials</li>
				<li class='list-item'>Add like button and feedback section.</li>
			</ul>
        </div>
    )
}

export default WhatsNext
