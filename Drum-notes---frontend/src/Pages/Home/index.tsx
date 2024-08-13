import { useEffect, useState } from 'react';
import { CardItem } from '../../component/Card/index';
import { AdicionarConteudo } from '../../component/AdicionarConteudo/index';
import { api } from '../../services/api';

interface Note {
  _id: string;
  conteudo: string;
  image: string;
  link: string;
  title: string;
}

function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get('/notes/show');
        setNotes(response.data);
      } catch (error) {
        console.error("Erro ao buscar notas:", error);
      }
    };

    fetchNotes();
  }, []);

  async function handleDelete(cardId: string) {
  if (!cardId) {
    console.error('ID inválido:', cardId);
  }

  try {
    console.log(`ID recebido para deletar: ${cardId}`);
    await api.delete(`/notes/delete/${cardId}`);
    window.location.reload();
  } catch (error) {
    console.error("Erro ao deletar nota:", error);
  }
}

  return (
    <>
      <div className="mx-auto w-[90%]">
        <h1 className="py-5 font-medium text-xl mb-2">* Seu progresso</h1>
        <main className='gap-5 flex flex-wrap w-full items-center'>
          <CardItem notes={notes} handleDelete={handleDelete} />
          <AdicionarConteudo />
        </main>
      </div>
    </>
  );
}

export default Home;