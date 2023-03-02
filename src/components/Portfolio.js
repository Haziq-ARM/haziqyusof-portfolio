import { Link } from 'react-router-dom'

const Portfolio = () => {

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Works.</h1>
					<div id="portfolio-wrapper" className="row">
						<div className="flex-container primary">
							<div className="image-container">
								<img alt="Selenium project" src={'/images/article/selenium2.jpeg'} className="item-img-article" />
							</div>
							<div className="content-container">
								<h1>Selenium Reservation Bot</h1>
								<div>
									<img src={'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'} className="item-img" />
									<img src={'https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'} className="item-img" />
								</div>
								<p>Bot automation to automate reservation process using Selenium</p>
								<Link className="scrolltop" to={"/article/selenium"}><button>READ MORE</button></Link>
							</div>
						</div>
						<div className="flex-container secondary">
							<div className="content-container">
								<h1>Ivent - Event Management</h1>
								<p>Intially developed to manage wedding reception event, later progress to be a generic event management platform where user able to create and manage event.</p>
								<button>READ MORE</button>
							</div>
							<div className="image-container">
								<img alt="Ivent project" src={'images/portfolio/Ivent.png'} className="item-img-article" />
							</div>
						</div>
						<div className="flex-container primary">
							<div className="image-container">
								<img alt="Search engine project" src={'images/portfolio/MovieSearchEngine.png'} className="item-img-article" />
							</div>
							<div className="content-container">
								<h1>Movie Search Engine</h1>
								<p>A simple movie search engine, powered by tmdB</p>
								<div className="button-container">
								<button>READ MORE</button>
								<a href="http://movieengine.haziqyusof.com"><button>DEMO</button></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

}

export default Portfolio