import { AboutContainer, SkillsContainer, TextContainer } from './styles'

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
} from 'react-icons/si'

export const About = () => {
  return (
    <AboutContainer>
      <TextContainer>
        <h2>Sobre mim</h2>
        <p>
          Comecei trabalhando com na área de tecnologia com 15 anos, na parte de
          montagem e manutenção de micro, em 2017, ao completar 18 anos,
          ingressei ao Exército. Em março de 2022 decidi pedir baixa do Exército
          para poder focar 100% nos estudos.
        </p>
        <p>
          No ultimo ano(2022) realizei a conclusão do curso Explorer da
          Rocketseat. Atualmente estou fazendo o Curso Ignite da Rockeseat para
          continuar aprimorando
        </p>
      </TextContainer>

      <SkillsContainer>
        <h2>Skills</h2>
        <ul>
          <li>
            <span>
              <SiHtml5 />
            </span>{' '}
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              html
            </a>
          </li>
          <li>
            <span>
              <SiCss3 />
            </span>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              css
            </a>
          </li>
          <li>
            <span>
              <SiJavascript />
            </span>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              javascript
            </a>
          </li>
          <li>
            <span>
              <SiReact />
            </span>
            <a href="">react</a>
          </li>
          <li>
            <span>
              <SiTypescript />
            </span>
            <a
              href="https://pt-br.reactjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              typescript
            </a>
          </li>
        </ul>
      </SkillsContainer>
    </AboutContainer>
  )
}
