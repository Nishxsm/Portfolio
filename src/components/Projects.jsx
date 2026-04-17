import '../styles/Projects.css'
import { projectsData } from '../data/projectsData'

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-list">
        {projectsData.map((project, index) => {
          const Card = project.demo ? "a" : "div"

          return (
            <Card
              key={index}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >

          
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

             
              <div className="project-content">

                <h3 className="project-title">
                  {project.title} <span className="arrow">↗</span>
                </h3>

                <p className="project-desc">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>

              </div>

            </Card>
          )
        })}
      </div>

    </section>
  )
}

export default Projects