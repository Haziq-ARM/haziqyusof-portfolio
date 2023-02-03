

const Resume = () => {
  return (
    <section id="resume">

      <div className="row education">

        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>University of Ottawa</h3>
              <p className="info">
                Bsc in Computer Engineering
                <span>&bull;</span> <em className="date">September 2015 - July 2019</em></p>
              <p>
                CGPA 7.77
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Rhonda.ai (IMI)</h3>
              <p className="info">
                Full Stack Software Developer
                <span>&bull;</span> <em className="date">September 2019 - Current</em></p>
              <p>
                Full Stack Software developer at IMI, working on the AI-powered workforce management platform called Rhonda.
              </p>
              <ul>
                <li>Built a clock/shift management software on cloud with support for QR code scanning</li>
                <li>Integrated Twilio API for phone service automation</li>
                <li>Remotely managed a team to work on cloud solution project</li>
                <li>Managed software integration and deployment on Cloud</li>
              </ul>
            </div>
          </div>

          <div className="row item">
            <div className="twelve columns">
              <h3>Pinjam.co</h3>
              <p className="info">
                Back End Developer
                <span>&bull;</span> <em className="date">October 2020 -  March 2021 (6 Months)</em></p>
              <p>
                Contract Backend Developer, worked remotely from Canada for a company in Malaysia
              </p>
              <ul>
                <li>Designed database and system structure for backend system</li>
                <li>Developed backend APIs for frontend integration</li>
                <li>Integrated payment gateway by Curlec with the backend system that successfully manage recurring payment from client every day</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>
            {/* {resumeData.skillsDescription} */}
          </p>

          <div className="bars">

            <ul className="skills">
              {/* {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                } */}

            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Resume