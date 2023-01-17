import { CardProject } from '../../components/CardProject'
import {
  AllProjectsContainer,
  LatestProjectsContainer,
  ProjectsContainer,
} from './styles'

import { data } from '../../utils/data'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface allRepoProps {
  id: number
  name: string
  html_url: string
}

export const Projects = () => {
  const [allRepo, setAllRepo] = useState<allRepoProps[]>([])

  useEffect(() => {
    const asyncData = async () => {
      const response = await axios.get(
        'https://api.github.com/users/eduardongomes/repos',
      )
      setAllRepo(response.data)
    }
    asyncData()
  }, [])
  return (
    <ProjectsContainer>
      <h2>Projetos</h2>

      <LatestProjectsContainer>
        <h3>Últimos Projetos</h3>
        <div>
          {data.map((item) => (
            <CardProject
              title={item.title}
              img={item.img}
              deploy={item.deploy}
              github={item.github}
              key={String(item.id)}
            />
          ))}
        </div>
      </LatestProjectsContainer>

      <AllProjectsContainer>
        <h3>Todos os projetos</h3>
        <div>
          <ul>
            {allRepo.map((item) => (
              <li key={String(item.id)}>
                <a href={item.html_url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </AllProjectsContainer>
    </ProjectsContainer>
  )
}
