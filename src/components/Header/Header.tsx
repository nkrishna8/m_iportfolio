import { Container } from './styles'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
// import Resume from '../../assets/Vinayak_Kumar_Singh_Resume.pdf'

export function Header() {

  let resume_link = "1MCXpeuRx2looRj9rmmVbx0RluPqFzl9t";

  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (

    <Container className="header-fixed">
      <Router>

        <HashLink smooth to="#home" className="logo">
          <span>{"<Harekrishna "}</span>
          <span>{" Mandal/>"}</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>

          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>

          <a
            // href="https://drive.google.com/file/d/1MCXpeuRx2looRj9rmmVbx0RluPqFzl9t/view?usp=sharing"
            href={`https://drive.google.com/file/d/${resume_link}/view?usp=sharing`}
            target="_blank"
            className="button"
          >Resume</a>

          {/* <a href={Resume} download className="button">
            Resume
          </a> */}
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>

      </Router>
    </Container>
  )
}
