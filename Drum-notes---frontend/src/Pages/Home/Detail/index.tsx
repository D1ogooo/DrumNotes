import { useParams } from 'react-router-dom'
import { data } from './data'

export const Detail = () => {
  const { id } = useParams();
  const project = data.find((project) => project.id === Number(id))
  
  if (!project) {
   return <p className='text-center mt-[20rem] text-xl bg-gray-800 w-[20rem] mx-auto text-white p-5'>Projeto não encontrado</p>
  }

  return (
   <div className='mx-auto w-[90%]'>
    <div>
     <h1>Bom dia , bem vindo aos detalhes</h1>
   </div>
  </div>
  )
}