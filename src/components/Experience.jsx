import experienceData from "../data/experienceData"
import "../styles/Experience.css"

function Experience() {
  return (
    <section id="experience" className="experience">


      {experienceData.map((job, index) => (
        <div className="exp-card" key={index}>

        
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

        </div>
      ))}

    </section>
  )
}

export default Experience