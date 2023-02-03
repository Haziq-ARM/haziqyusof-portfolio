

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
                Achivement
              </p>
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