import { Link } from 'react-router-dom';
import AddIcon from '../../assets/bx-plus-circle.svg'

export const AdicionarConteudo = () => {
  return (
   <>
    <div className='ml-[2.5rem]'>
      <Link to='/createNew' className='h-12' >
       <img src={AddIcon} className='h-12'/>
      </Link>
    </div>
   </>
  )
}