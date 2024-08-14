import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

function NewNote() {
  const [titulo, setTitulo] = useState('');
  const [link, setLink] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  }

  async function handleSubmit() {
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('link', link);
    formData.append('conteudo', conteudo);
    if (image) {
      formData.append('image', image);
    }

    try {
      await api.post('/notes/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setTitulo('');
      setLink('');
      setConteudo('');
      setImage(null);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="bg-white shadow p-4 py-8">
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">Criar post</div>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Título do vídeo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="Link do vídeo"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none resize-none"
            spellCheck="false"
            placeholder="Descreva o conteúdo do video"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          ></textarea>
          <div className="icons flex text-gray-500 m-2">
            <label htmlFor="fileInput">
              <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <input id="fileInput" type="file" onChange={handleFileInputChange} style={{ display: 'none' }} />
            </label>
          </div>
          <div className="buttons flex justify-end">
            <div onClick={handleSubmit} className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewNote;
