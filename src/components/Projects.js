import '../styles/Projects.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Projects() {
  const [{ theme }] = useContext(ThemeContext)

  return (
    <section id='projects'
      style={{ color: theme.projectsAccent }}>
      <div className="Projects__wrapper">
        <div className="Projects__primaryBg" style={{ backgroundColor: theme.projectsBg2 }}>
          <div className="Projects__accentBg row justify-content-center" style={{ backgroundColor: theme.projectsBg1 }}>
            <h3>Projects</h3>
          </div>
          <div className="Projects__contentWrapper container">
            <div className="row justify-content-center">
              <div className="Projects__tile col-md-4" style={{ backgroundColor: theme.projectsAccent }}></div>
              <div className="Projects__tile col-md-4" style={{ backgroundColor: theme.projectsAccent }}></div>
            </div>
            <div className="row justify-content-center">
              <div className="Projects__tile col-md-4" style={{ backgroundColor: theme.projectsAccent }}></div>
              <div className="Projects__tile col-md-4" style={{ backgroundColor: theme.projectsAccent }}></div>
            </div>
            <div className="row justify-content-center">
              <div className="Projects__tile col-md-4" style={{ backgroundColor: theme.projectsAccent }}></div>
              <div className="Projects__tile col-md-4" style={{ backgroundColor: theme.projectsAccent }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}