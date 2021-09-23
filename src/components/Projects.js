import '../styles/Projects.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import { projects } from '../projectsList'

export default function Projects() {
  const [{ theme }] = useContext(ThemeContext)

  return (
    <section id='projects'
      style={{ color: theme.projectsAccent }}>
      <div className='Projects__wrapper'>
        <div className='Projects__primaryBg' style={{ backgroundColor: theme.projectsBg2 }}>
          <div className='Projects__accentBg' style={{ backgroundColor: theme.projectsBg1 }}>
          </div>
          <div className='General__wrapper'>
            <div className='Projects__contentWrapper container d-flex flex-wrap flex-row'>
          <h3>Projects</h3>

              <div className='row w-100 justify-content-center'>
                {projects.map((project, index) => {
                  return (
                    <div key={index}
                      className='Projects__tile col-md-5'
                      style={{ backgroundImage: `url(${project.image})` }}>
                      <div className="Projects__info Projects__info--blur">
                        <h4>{project.title}</h4>
                        <h5>{project.subtitle}</h5>
                        <p>{project.description}</p>
                        <a href={project.demoLink}>Demo</a>
                        <a href={project.repoLink}>Source Code</a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
