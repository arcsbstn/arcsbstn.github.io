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
          <div className='Projects__accentBg row justify-content-center' style={{ backgroundColor: theme.projectsBg1 }}>
            <h3>Projects</h3>
          </div>
          <div className='General__wrapper'>
            <div className='Projects__contentWrapper container d-flex flex-wrap flex-row'>
              <div className='row w-100 justify-content-center'>
                {projects.map((project, index) => {
                  return (
                    <div key={index}
                      className='Projects__tile col-md-5'
                      style={{
                        backgroundImage: `url(${project.image})`
                      }}>
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
