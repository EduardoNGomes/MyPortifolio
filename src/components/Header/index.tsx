import { HeaderContainer, HeaderContent } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>

      <h1><span>&#60;</span>  Eduardo N Gomes <span>/&#62;</span> </h1>

      <ul>
        <li>
          <button>
            sobre
          </button>
          </li>
        <li>
          <button>
            projetos
          </button>
        </li>
        <li>
          <button>
            contatos
          </button>
          </li>
      </ul>
      </HeaderContent>
    </HeaderContainer>
  )
}