import { useEffect, useState } from "react"
import '../styles/Sidebar.css'

function Sidebar() {
  const [active, setActive] = useState("about")

  
  useEffect(() => {
    const sections = ["about", "experience", "projects"]
    const content = document.querySelector(".content")

    const handleScroll = () => {
      let current = "about"

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 200) {
            current = id
          }
        }
      })

      setActive(current)
    }

    if (content) content.addEventListener("scroll", handleScroll)

    return () => {
      if (content) content.removeEventListener("scroll", handleScroll)
    }
  }, [])

 
  const texts = [
    "I DO FRONTEND DEV",
    "I DO BACKEND DEV",
    "I DO MACHINE LEARNING",
    "I DO MOBILE DEVELOPMENT"
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [display, setDisplay] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const text = texts[textIndex]

  useEffect(() => {
    const speed = deleting ? 40 : 70

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (index < text.length) {
          setDisplay(text.slice(0, index + 1))
          setIndex(index + 1)
        } else {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        if (index > 0) {
          setDisplay(text.slice(0, index - 1))
          setIndex(index - 1)
        } else {
          setDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [index, deleting, text])

  return (
    <div className="sidebar">
      
      <div className="sidebar-top">
        <h1 className="name">Nishant Dandnaik</h1>
        <h2 className="role">Fullstack Developer</h2>

        <p className="tagline">
          {display}
          <span className="cursor">|</span>
        </p>

        <nav className="side-nav">
          <a href="#about" className={active === "about" ? "active" : ""}>
            <span className="line"></span>
            ABOUT
          </a>

          <a href="#experience" className={active === "experience" ? "active" : ""}>
            <span className="line"></span>
            EXPERIENCE
          </a>

          <a href="#projects" className={active === "projects" ? "active" : ""}>
            <span className="line"></span>
            PROJECTS
          </a>
        </nav>
      </div>

      <div className="socials">
  <a href="https://github.com/Nishxsm" target="_blank" rel="noreferrer">
  <i className="fab fa-github"></i>
</a>

<a href="https://www.linkedin.com/in/nishant-dandnaik-2b5a6431a/" target="_blank" rel="noreferrer">
  <i className="fab fa-linkedin"></i>
</a>

       
        <a href="https://leetcode.com/Nishxsm" target="_blank" rel="noreferrer">
          <img src="/icons/leetcode.svg" alt="leetcode" className="icon" />
        </a>
      </div>

    </div>
  )
}

export default Sidebar