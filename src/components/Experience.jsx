import experienceData from "../data/experienceData"
import "../styles/Experience.css"

function Experience() {
  return (
    <section id="experience" className="experience">

      {experienceData.map((job, index) => {
        const Card = job.link ? "a" : "div"

        return (
          <Card
            key={index}
            href={job.link}
            target="_blank"
            rel="noreferrer"
            className="exp-card"
          >

            <div className="exp-left">
              {job.duration}
            </div>

            <div className="exp-right">
              <h3>
                {job.role} @ {job.company}
              </h3>

              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {job.tech.map((t, i) => (
                  <span key={i} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </Card>
        )
      })}

      
      <div className="resume-link">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          View Full Résumé <span>↗</span>
        </a>
      </div>

    </section>
  )
}

export default Experience