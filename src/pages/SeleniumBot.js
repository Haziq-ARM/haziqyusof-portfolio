import BaseArticle from "./BaseArticle"

const SeleniumBot = () => {
	return (
		<BaseArticle>
			<h1>Selenium Bot</h1>
			<div>
				<img src={'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'} className="item-img" />
				<img src={'https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white'} className="item-img" />
				<img src={'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'} className="item-img" />
			</div>
			<div className="article-header">
				<img alt="selenium-header" src={'/images/article/selenium2.jpeg'} className="article-image" />
			</div>

			<section id="">
				<h2>Introduction</h2>
				<p>
					Always fully booked ??!
				</p>
				<p>
					That is always what I say whenever I see the reservation page. I am a badminton lover, and I love to play badminton together with my friend. I encounter a problem where the reservation for badminton is always full when the reservation opens up. It is frustrating because I have to compete with other guests/players to get my own spot for badminton game whenever it opens up. Thus, I decided to create a bot that will help me get a spot
				</p>
			</section>

			<section>
				<h2>Reservation</h2>
				<p>Here are main points of the reservation system</p>
				<ul>
					<li>Reservation become available at 6PM EST time</li>
					<li>Badminton sport have two time slots available, 7PM and 8.45PM</li>
					<li>Spots are limited: Only 32 spots available for each time slots</li>
				</ul>
			</section>

			<section>
				<h2>Bot Architecture</h2>
				<p>
					For this bot project, I use the following tools and technologies.
				</p>
				<ul>
					<li>Selenium</li>
					<li>AWS Lambda Function</li>
					<li>AWS Event Bridge</li>
					<li>AWS S3</li>
				</ul>

				<p>You may wonder, why Lambda and EventBridge ? The reason is simple, I need the bot to run automatically without my interaction at all. That is why I use Lambda function to have my Selenium Bot that can be triggered automatically using EventBridge. With this architecture, I do not have to worry about executing my bot and when to execute it</p>
				<img alt="selenium architecture" src={'/images/article/selenium1.png'} className="item-img" />
			</section>

			<section>
				<h2>Process</h2>

				<p>Lambda Function/Bot will be trigged by the EventBridge by 6PM EST. Once the Lambda triggered, the python script containing Selenium automation will keep retrying to access the reservation system. Once the reservation system is ready for booking, the bot will automatically choose the appropriate sport and time, and automatically fill in my personal information.</p>
				<p>Every step of the process, Selenium will take a screenshot and store it in the S3 bucket. This is for debugging purposes because sometimes error occured in one of the steps and it is easier for me to see what is actually happening at each of the steps</p>
			</section>

			<section>
				<h2>Things to improve</h2>

				<p>I believe there are some other things that can be improved such as</p>

				<ul>
					<li>Add notification - I need an update to see if my bot run successfully or failed</li>
				</ul>
			</section>

			<section>
				<h2>Resources</h2>

				<a href="https://github.com/akiraro/LamBot">Github</a> - This repo contains the Selenium code with Lambda layer file
			</section>
		</BaseArticle>
	)
}

export default SeleniumBot