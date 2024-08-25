import { useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import TecladoImage from '../../assets/homem-de-alto-angulo-tocando-piano-no-estudio.jpg'
import { Lock, Mail } from 'lucide-react'
import { useAuth } from '../../Hooks/useAuth'

function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [spinner, setSpinner] = useState<boolean>(false)
  const { login } = useAuth()

  function handleSubmit (e: React.FormEvent) {
   e.preventDefault()
   login(email, password)
   setSpinner(true)
   setTimeout(() => {
    setSpinner(false)
   }, 3000)
  }

  return (
   <div className="mx-auto w-[90%] flex items-center justify-center min-h-screen p-4">
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-white p-5 rounded-lg shadow-sm">
     <section className='w-full md:w-1/2 flex justify-center mb-4 md:mb-0'>
      <img src={TecladoImage} alt="Imagem do teclado" className='w-full max-w-sm rounded-lg shadow-md'/>
     </section>
     <section className='w-full md:w-1/2'>
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-10">Bem vindo <span className='text-green-500'>musico</span></h1>
      <form className="flex flex-col items-center">
       <div className="relative w-full mb-3">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" height={19} />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Declare seu email..." className="border w-full py-2 px-10 rounded-md focus:outline-none focus:ring-primary-500"/>
       </div>
       <div className="relative w-full mb-5">
         <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" height={19}/>
         <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Declare sua senha..." className="border w-full py-2 px-10 rounded-md focus:outline-none focus:ring-primary-500"/>
       </div>
       <p>Não possui uma conta?<Link className='text-red-600' to='/register'>Click aqui</Link></p>
       <button type="submit" className="bg-primary-500 text-black py-2 px-4 rounded-md hover:bg-primary-700 font-medium" onClick={handleSubmit}>{spinner ? 
       <Spinner
        thickness='.25rem'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='lg'
       /> : 'Entrar'}</button>
      </form>
     </section>
    </div>
   </div>
  )
}

export default SignIn
{/* <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/> */}