import BaseArticle from "./BaseArticle"

const TwitterBot = () => {
	return (
		<BaseArticle>
			<h1>Twitter Bot</h1>
			<div>
				<img src={'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'} className="item-img" />
				<img src={'https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white'} className="item-img" />
			</div>
			<div className="article-header">
				<img alt="selenium-header" src={'/images/article/twitter.png'} className="article-image" />
			</div>

			<section id="">
				<h2>Introduction</h2>
				<p>
					This is a freelance project where a client requested to build a bot that able to scrape tweet on twitter social media platform.
				</p>
			</section>

			<section>
				<h2>Requirements</h2>
				<p>My proposal was accepted by the client and the client requirements are such below</p>
				<ul>
					<li>Bot able to automate login process on Twitter platform</li>
					<li>Bot able to scrape tweet(does not include retweet) from a specific user</li>
					<li>Bot able to export data in csv formatted file</li>
					<li>Bot must have a GUI where the client will be able to interact and enter a specific information (username, password, target user, number of tweets</li>
				</ul>
			</section>

			<section>
				<h2>Bot Architecture</h2>
				<p>
					For this bot project, I use the following tools and technologies.
				</p>
				<ul>
					<li>Python</li>
					<li>Scrapy</li>
					<li>Scrapy-Playwright package</li>
					<li>Tkinter</li>
				</ul>

			</section>

			<section>
				<h2>How it works</h2>

				<img alt="selenium-header" src={'/images/article/twitter2.gif'} className="article-image" />
			</section>

		</BaseArticle>
	)
}

export default TwitterBot