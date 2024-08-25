import { useState } from 'react'
import { useAuth } from '../../Hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User } from 'lucide-react'
import TecladoImage from '../../assets/homem-de-alto-angulo-tocando-piano-no-estudio.jpg'
import { useToast } from '@chakra-ui/toast'

function SignUp() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !email || !password || !confirmPassword) {
     return toast({
      title: 'Error ao criar conta',
      description: "Declare todos os campos",
      status: 'error',
      duration: 9000,
      isClosable: true,
     })
    }
    if (password !== confirmPassword) {
     return toast({
      title: 'Error ao criar conta',
      description: "As senhas não coincidem",
      status: 'error',
      duration: 9000,
      isClosable: true,
     })
    }
    register(nome, email, password);
    navigate('/')
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
         <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" height={19} />
         <input type="text" placeholder="Declare seu nome..." onChange={(e) => setNome(e.target.value)} className="border w-full py-2 px-10 rounded-md focus:outline-none focus:ring-primary-500"/>
       </div>
       <div className="relative w-full mb-3">
         <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" height={19} />
         <input type="email" placeholder="Declare seu email..." onChange={(e) => setEmail(e.target.value)} className="border w-full py-2 px-10 rounded-md focus:outline-none focus:ring-primary-500"/>
       </div>
       <div className="relative w-full mb-5">
         <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" height={19}/>
         <input type="password" placeholder="Declare sua senha..." onChange={(e) => setPassword(e.target.value)} className="border w-full py-2 px-10 rounded-md focus:outline-none focus:ring-primary-500"/>
       </div>
       <div className="relative w-full mb-5">
         <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" height={19}/>
         <input type="password" placeholder="Confirme sua senha..." onChange={(e) => setConfirmPassword(e.target.value)} className="border w-full py-2 px-10 rounded-md focus:outline-none focus:ring-primary-500"/>
       </div>
       <p className="text-center mb-5">Já possui uma conta? <Link className='text-red-600' to='/'>Clique aqui</Link></p>
       <button className="bg-primary-500 text-black py-2 px-4 rounded-md hover:bg-primary-700 font-medium" onClick={handleSubmit}>Cadastrar-se</button>
      </form>
     </section>
    </div>
   </div>
  )
}

export default SignUp
