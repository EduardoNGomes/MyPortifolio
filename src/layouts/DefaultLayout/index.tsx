import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { DefaultLayoutContent, OutletContainer } from "./styles"

export const DefaultLayout = () => {
  return (
    <DefaultLayoutContent>
      <Header/>
      <OutletContainer>
        <Outlet/>
      </OutletContainer>
    </DefaultLayoutContent>
  )


  
}