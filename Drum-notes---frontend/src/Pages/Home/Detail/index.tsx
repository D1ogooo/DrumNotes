import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api';
import { Note } from '../../../@types/tipages';

export const Detail = () => {
  const [data, setData] = useState<Note | null>(null)
  const { id } = useParams<string>();
  useEffect(() => {
    if (id) {
      api.get(`/notes/show/user_expecifi/${id}`)
        .then(response => {
          const fetchedData = response.data;
          if (Array.isArray(fetchedData)) {
            const note = fetchedData.find((item: []) => item._id === id);
            setData(note || null);
          } else {
            setData(fetchedData);
          }
        })
        .catch((error) => {
          console.log('Erro ao buscar nota.', error);
        });
    }
  }, [id]);
  
  const project = data?._id === id;
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