

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


      <div id="skill" className="row skill">

        <div className="skill-title">
          <h1><span>Skills</span></h1>
        </div>

        <div className="skill-container">
          <div className="">
            <p className="skill-p">Language</p>
            <img src={'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'} className="item-img" />
            <img src={'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'} className="item-img" />
            <img src={'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white'} className="item-img" />
          </div>
          <div className="">
            <p className="skill-p">Frontend Framework</p>
            <img src={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} className="item-img" />
            <img src={'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white'} className="item-img" />
          </div>
          <div className="">
            <p className="skill-p">Backend Framework</p>
            <img src={'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'} className="item-img" />
            <img src={'https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi'} className="item-img" />
            <img src={'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray'} className="item-img" />
          </div>

          <div className="">
            <p className="skill-p">DevOps</p>
            <img src={'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white'} className="item-img" />
          </div>

          <div className="">
            <p className="skill-p">Database</p>
            <img src={'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'} className="item-img" />
          </div>

          <div className="">
            <p className="skill-p">Automation/Testing Framework</p>
            <img src={'https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e'} className="item-img" />
            <img src={'https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white'} className="item-img" />
          </div>

          <div className="">
            <p className="skill-p">Others</p>
            <img src={'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} className="item-img" />
            <img src={'https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'} className="item-img" />
            <img src={'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'} className="item-img" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Resume