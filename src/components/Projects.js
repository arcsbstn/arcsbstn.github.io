import '../styles/Projects.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import { projects } from '../projectsList'

export default function Projects() {
  const [{ theme }] = useContext(ThemeContext)
  const accentMainStyle = {
    color: theme.accentMain
  }
  const accentTweakedStyle = {
    color: theme.accentTweaked
  }

  return (
    <section id='projects'
      style={{ color: theme.text }}>
      <div className='Projects__wrapper'>
        <div className='Projects__primaryBg' style={{ backgroundColor: theme.bgMain }}>
          <div className='General__wrapper'>
            <div className='Projects__contentWrapper container d-flex flex-wrap flex-row justify-content-center'>
              <h3 style={accentMainStyle}>Projects</h3>
              {projects.map((project, index) => {
                return (
                  <div className="row w-100 justify-content-center">
                    <div key={index}
                      className='Projects__tile col-md-6'
                      style={{ background: `linear-gradient(to right,${theme.accentMain}33, ${theme.accentMain}cc),url(${project.image}) no-repeat center` }}>
                    </div>
                    <div className="Projects__infoWrapper col-md-4">
                      <div className="Projects__info">
                        <h4 style={accentMainStyle}>{project.title}</h4>
                        <p style={{ backgroundColor: theme.bgTweaked }}>
                          Built with: {project.techStack.join(', ')}<br />
                          {project.description}
                        </p>
                        <ul>
                          <li><a href={project.demoLink} className='underline-on-hover' style={accentTweakedStyle}>DEMO</a></li>
                          <li><a href={project.repoLink} className='underline-on-hover' style={accentTweakedStyle}>SRC</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='text-center' style={{marginTop: '20px'}}>
              <i className='fa fa-star' style={{marginRight: '20px'}}></i> 
                More projects in <a href='https://github.com/arcsbstn/' target='_blank' rel='noreferrer' style={accentMainStyle}>GitHub</a> and <a href='https://codepen.io/arcsbstn/' target='_blank' rel='noreferrer' style={accentMainStyle}>CodePen</a> 
              <i className='fa fa-star' style={{marginLeft: '20px'}}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
