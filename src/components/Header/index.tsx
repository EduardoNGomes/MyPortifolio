import { HeaderContainer, HeaderContent } from './styles'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
export const Header = () => {
  const [pageActive, setPageActive] = useState('')

  const [isOpen, setOpen] = useState(false)
  const pageLocation = window.location.pathname
  useEffect(() => {
    const whichPage = () => {
      switch (pageLocation) {
        case '/about': {
          return setPageActive('about')
        }
        case '/projects': {
          return setPageActive('projects')
        }
        case '/contact': {
          return setPageActive('contact')
        }
        default: {
          return setPageActive('')
        }
      }
    }
    whichPage()
  }, [pageLocation])
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1 onClick={() => navigate('/')}>
          <span>&#60;</span> Eduardo N Gomes <span>/&#62;</span>{' '}
        </h1>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu '}>
          <li className={isOpen ? 'nav-item' : ' '}>
            <button
              onClick={() => navigate('/about')}
              className={pageActive === 'about' ? 'activePage' : ' '}
            >
              sobre
            </button>
          </li>
          <li className={isOpen ? 'nav-item' : ' '}>
            <button
              onClick={() => navigate('/projects')}
              className={pageActive === 'projects' ? 'activePage' : ' '}
            >
              projetos
            </button>
          </li>
          <li className={isOpen ? 'nav-item' : ' '}>
            <button
              onClick={() => navigate('/contact')}
              className={pageActive === 'contact' ? 'activePage' : ' '}
            >
              contatos
            </button>
          </li>
        </ul>
        <button className="menu" type="button">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
