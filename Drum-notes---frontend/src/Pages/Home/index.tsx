import { CardItem } from '../../component/Card/index'
import { AdicionarConteudo } from '../../component/AdicionarConteudo/index'

function Home () {
  return (
   <>
    <div className="mx-auto w-[90%]">
     <h1 className="py-5 font-medium text-xl mb-2">* Seu progresso</h1>
     <main className='gap-5 flex flex-wrap w-full items-center'>
      <CardItem/>
      <AdicionarConteudo />
     </main>
    </div>
   </>
  )
}

export default Home