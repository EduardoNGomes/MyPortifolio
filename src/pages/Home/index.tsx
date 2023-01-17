import { useNavigate } from 'react-router-dom'
import { HomeContainer } from './styles'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <HomeContainer>
      <div>
        <p>Olá, meu nome é</p>
        <h2>eduardo nascimento gomes</h2>
        <p>
          sou desenvolvedor <span>web</span> com foco em
          <span> front-End</span>
        </p>
      </div>
      <div>
        <button onClick={() => navigate('/about')}>saiba mais</button>
      </div>
    </HomeContainer>
  )
}
