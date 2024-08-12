import { BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../Hooks/useAuth';

export function Router() {
 const { user } = useAuth();
 return (
  <>
   <BrowserRouter>
    {user ? <AppRoutes/> : <AuthRoutes/>}
   </BrowserRouter>
  </>
 )
}