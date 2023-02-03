const Footer = () => {
	return (
		<footer>
			<div className="row">
				<div className="twelve columns">
					Built with ❤️ by Haziq Yusof, powered by ReactJS
					<ul className="social-links">
						<li>
							<a href="https://www.linkedin.com/in/hazhafizi/" target="_blank"><i className={'fa fa-linkedin'}></i></a>
						</li>
						<li>
							<a href="https://www.github.com/akiraro/" target="_blank"><i className={'fa fa-github'}></i></a>
						</li>
					</ul>

				</div>
				<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
			</div>
		</footer>
	)
}

export default Footer