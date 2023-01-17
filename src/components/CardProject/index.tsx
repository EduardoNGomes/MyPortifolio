import { CardProjectContainer } from './styles'

interface CardProjectProps {
  img: string
  title: string
  deploy: string
  github: string
}

export const CardProject = ({
  img,
  title,
  deploy,
  github,
}: CardProjectProps) => {
  return (
    <CardProjectContainer>
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>
          <a href={deploy} target="_blank" rel="noreferrer">
            deploy
          </a>
        </p>
        <p>
          <a href={github} target="_blank" rel="noreferrer">
            repositório
          </a>
        </p>
      </div>
    </CardProjectContainer>
  )
}
