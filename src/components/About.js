
const About = () => {
	return (
		<section id="about">
			<div className="row">

				<div className="three columns">

					<img className="profile-pic" src="images/profilepic.jpg" alt="" />

				</div>

				<div className="nine columns main-col">

					<h2>About Me</h2>
					<p>
					I am currently a pre-final year student at The LNM Institute of Information Technology and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.
					</p>

					<div className="row">

						<div className="columns contact-details">

							<h2>Contact Details</h2>
							<p className="address">
								<span>Haziq Yusof</span>
								<br></br>
								<span>
									haziq_yusof@hotmail.com
								</span>
								<br></br>
								<span>haziqyusof.co</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About