import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { SiGmail } from 'react-icons/si'
import { ContactContainer } from './styles'

export const Contact = () => {
  return (
    <ContactContainer>
      <h2>contatos:</h2>
      <ul>
        <li>
          <a href="https://github.com/EduardoNGomes">
            <span>
              <FaGithub />
            </span>
            github
          </a>
        </li>
        <li>
          <a href="https://github.com/EduardoNGomes">
            <span>
              <FaLinkedin />
            </span>
            linkedIn
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <SiGmail />
            </span>
            email
          </a>
        </li>
      </ul>
    </ContactContainer>
  )
}
