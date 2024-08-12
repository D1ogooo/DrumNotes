import React from 'react';
import { Card, CardBody, Stack, Image, Heading, Text, Divider } from '@chakra-ui/react';
import { Delete } from '../Delete';
import { Link } from 'react-router-dom';

interface Note {
  _id: string;
  conteudo: string;
  image: string;
  link: string;
  title: string;
}

interface CardItemProps {
  notes: Note[];
  handleDelete: (id: string) => void;
}

export const CardItem: React.FC<CardItemProps> = ({ notes, handleDelete }) => {
  return (
    <>
      {notes.length > 0 ? (
        notes.map((card) => (
          <Card key={card._id} maxW='sm' className="bg-background-card h-auto w-[20rem] rounded-[10px] p-[.7rem]">
            <CardBody>
              <Link to={`/details/${card._id}`} className="block">
               <Image
                src={`http://localhost:3000${card.image.replace('\\', '/')}`}
                alt={card.title}
                borderRadius='lg'
                fallbackSrc="https://via.placeholder.com/150"
               />
              </Link>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{card.title}</Heading>
                <Text>{card.conteudo}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <div className='fixed cursor-pointer' onClick={() => handleDelete(card._id)}>
              <Delete size={27} color="#fff"/>
            </div>
          </Card>
        ))
      ) : (
        <p>Nenhuma nota encontrada.</p>
      )}
    </>
  );
};
