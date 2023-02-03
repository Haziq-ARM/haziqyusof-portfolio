

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
						<li><a className="smoothscroll" href="#contact">Contact</a></li>
					</ul>
				</nav>

				<div className="row banner">
					<div className="banner-text">
						<div className="sub-headline">Hi there,</div>
						<h1 className="responsive-headline">I am Haziq Yusof.</h1>
						<h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
							I am an intermediate Full Stack Software Developer.
						</h3>
						<h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
							<i>Your curiosity leads you here to know more about me, let's find out !</i>
						</h3>
						<hr />
						<ul className="social">
							<li>
								<a href="https://www.linkedin.com/in/hazhafizi/" target="_blank"><i className={'fa fa-linkedin'}></i></a>
							</li>
							<li>
								<a href="https://www.github.com/akiraro/" target="_blank"><i className={'fa fa-github'}></i></a>
							</li>
						</ul>
					</div>

					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<img src={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} className="item-img" />
						<img src={'https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white'} className="item-img" />
						<img src={'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white'} className="item-img" />
						<img src={'https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray'} className="item-img" />
						<img src={'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'} className="item-img" />
						<span style={{ color: '#fff', fontFamily: 'sans-serif', marginLeft: '10px', fontWeight: 600 }}><a className="smoothscroll more" href="#skill">And more ...</a></span>
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