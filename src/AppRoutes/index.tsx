import {Route,Routes} from 'react-router-dom'


import  { DefaultLayout} from '../layouts/DefaultLayout'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'

export const AppRoutes = () =>{
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/contact" element ={<Contact/>}/>
      </Route>
    </Routes>
  )
}