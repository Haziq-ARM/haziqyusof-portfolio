

const Header = () => {
	return (
		<>
			<header id="home">
				<nav id="nav-wrap">
					<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
					<a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
					<ul id="nav" className="nav">
						<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
						<li><a className="smoothscroll" href="#about">About</a></li>
						<li><a className="smoothscroll" href="#resume">Resume</a></li>
						<li><a className="smoothscroll" href="#portfolio">Works</a></li>
						{/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
						<li><a className="smoothscroll" href="#contact">Contact</a></li>
					</ul>
				</nav>

				<div className="row banner">
					<div className="banner-text">
						<div className="sub-headline">Hi there,</div>
						<h1 className="responsive-headline">I am Haziq Yusof.</h1>
						<h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>I am an intermediate Full Stack Software Developer.
						</h3>
						<hr />
						<ul className="social">
							<li>
								<a href="https://www.linkedin.com/in/hazhafizi/" target="_blank"><i className={'fa fa-linkedin'}></i></a>
							</li>
							<li>
								<a href="https://www.github.com/akiraro/" target="_blank"><i className={'fa fa-github'}></i></a>
							</li>
							{/* {
								resumeData.socialLinks && resumeData.socialLinks.map(item => {
									return (
										<li key={item.name}>
											<a href={item.url} target="_blank"><i className={item.className}></i></a>
										</li>
									)
								}
								)
							} */}
						</ul>
					</div>
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
				</p>

			</header>
		</>
	)
}

export default Header