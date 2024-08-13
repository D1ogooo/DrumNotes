import React from 'react';
import { Card, CardBody, Stack, Image, Heading, Text, Divider } from '@chakra-ui/react';
import type { Note } from '../../@types/tipages';
import { Delete } from '../Delete';
import { Link } from 'react-router-dom';

interface CardItemProps {
  notes: Note[];
  handleDelete: (id: string) => void;
}

export const CardItem: React.FC<CardItemProps> = ({ notes, handleDelete }) => {
  return (
    <>
      {notes.length > 0 ? (
        notes.map((card) => (
           <Card key={card._id} className="bg-background-card rounded-[10px] " boxSize='23rem' >
            <div className='cursor-pointer relative mt-2 ml-2' onClick={() => handleDelete(card._id)}>
             <Delete size={38} color="#9d9b9b56"/>
            </div>
            <CardBody className='w-full'>
              <Link to={`/details/${card._id}`} className="block">
              <Image
               src={`http://localhost:3000${card.image.replace('\\', '/')}`}
               alt={card.titulo}
               className='h-[11rem] w-full mt-[-3rem] rounded-sm'
               fallbackSrc="https://via.placeholder.com/150"
               objectFit='cover'
              />
              </Link>
              <Stack mt='6' spacing='3' className='w-full text-center h-auto'>
                <Heading size='md' className='text-center'>{card.titulo}</Heading>
                <Text
                  className='text-center'
                  overflowY='auto'
                  maxHeight='84px'
                >
                  {card.conteudo}
                </Text>
              </Stack>
            </CardBody>
            <Divider width={`98%`} m={'.125rem'} mx={'auto'}/>
          </Card>
        ))
      ) : (
        <p>Nenhuma nota encontrada.</p>
      )}
    </>
  );
};
