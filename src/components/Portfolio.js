const Portfolio = () => {

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Works.</h1>
					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						<div className="columns portfolio-item">
							<div className="item-wrap">
								<a href="#modal-01">
									<img src={'images/portfolio/MovieSearchEngine.png'} className="item-img" />
									<div className="overlay">
										<div className="portfolio-item-meta">
											<h5>Movie Search Engine</h5>
											<p>Description</p>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="columns portfolio-item">
							<div className="item-wrap">
								<a href="#modal-01">
									<img src={'images/portfolio/Ivent.png'} className="item-img" />
									<div className="overlay">
										<div className="portfolio-item-meta">
											<h5>Ivent</h5>
											<p>Description</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

}

export default Portfolio