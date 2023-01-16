import { HeaderContainer, HeaderContent } from './styles'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1 onClick={() => navigate('/')}>
          <span>&#60;</span> Eduardo N Gomes <span>/&#62;</span>{' '}
        </h1>

        <ul>
          <li>
            <button onClick={() => navigate('/about')}>sobre</button>
          </li>
          <li>
            <button onClick={() => navigate('/projects')}>projetos</button>
          </li>
          <li>
            <button onClick={() => navigate('/contact')}>contatos</button>
          </li>
        </ul>
      </HeaderContent>
    </HeaderContainer>
  )
}
