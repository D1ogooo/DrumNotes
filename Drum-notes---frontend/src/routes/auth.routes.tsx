import { Routes, Route } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Pagina_404 from '../Pages/NotFoundPage'

export function AuthRoutes() {
 return (
  <>
   <Routes>
    <Route path='/' element={<SignIn/>}/>
     <Route path='/register' element={<SignUp/>}/>
    <Route path="*" element={<Pagina_404/>}/>
   </Routes>
  </>
 )
}
