import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { Note } from '../../../@types/tipages';

export const Detail = () => {
  const [data, setData] = useState<Note | null>(null);
  const [editForm, setEditForm] = useState<Partial<Note>>({});
  const { id } = useParams<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/notes/show/user_expecifi/${id}`)
        .then(response => {
          const fetchedData = response.data;
          if (Array.isArray(fetchedData)) {
            const note = fetchedData.find((item: Note) => item._id === id);
            setData(note || null);
            setEditForm({
              titulo: note?.titulo || '',
              link: note?.link || '',
              conteudo: note?.conteudo || ''
            });
          } else {
            setData(fetchedData);
            setEditForm({
              titulo: fetchedData.titulo || '',
              link: fetchedData.link || '',
              conteudo: fetchedData.conteudo || ''
            });
          }
        })
        .catch((error) => {
          console.log('Erro ao buscar nota.', error);
        });
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (id) {
      try {
        await api.put(`/notes/update/${id}`, editForm);
        navigate('/');
      } catch (error) {
        console.error('Erro ao atualizar a nota:', error);
      }
    }
  };

  if (!data) {
    return <p className='text-center mt-[20rem] text-xl bg-gray-800 w-[20rem] mx-auto text-white p-5'>Projeto não encontrado</p>;
  }

  return (
    <div className="bg-white shadow p-4 py-8">
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">Editar postagem</div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-md">
        <input
          name="titulo"
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Título do vídeo"
          type="text"
          value={editForm.titulo || ''}
          onChange={handleInputChange}
        />
        <input
          name="link"
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Link do vídeo"
          type="text"
          value={editForm.link || ''}
          onChange={handleInputChange}
        />
        <textarea
          name="conteudo"
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none resize-none"
          spellCheck="false"
          placeholder="Conteúdo do vídeo"
          value={editForm.conteudo || ''}
          onChange={handleInputChange}
        ></textarea>
        <div className="icons flex text-gray-500 m-2" />
        <div className="buttons flex justify-end">
          <div
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 rounded-md"
            onClick={handleSubmit}
          >
            Publicar edição
          </div>
        </div>
      </div>
    </div>
  );
};
