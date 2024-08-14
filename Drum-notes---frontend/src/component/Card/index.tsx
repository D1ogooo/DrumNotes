import React from 'react';
import { Card, CardBody, Stack, Image, Heading, Text, Divider, useDisclosure, Button } from '@chakra-ui/react';
import type { Note } from '../../@types/tipages';
// import { Delete } from '../Delete';
import LixoIcon from '../../assets/bxs-trash.svg'
import { Link } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

interface CardItemProps {
  notes: Note[];
  handleDelete: (id: string) => void;
}

export const CardItem: React.FC<CardItemProps> = ({ notes, handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {notes.length > 0 ? (
        notes.map((card) => (
           <Card key={card._id} className="bg-background-card rounded-[.625rem] " boxSize='23rem' >
             <Button onClick={onOpen} width={51} height={50} margin={2}>
              <img src={LixoIcon} alt="" className='w-[1.875rem] h-[1.875rem]'/>
             </Button>
             <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Deletar post</ModalHeader>
              <ModalCloseButton />
             <ModalBody>
             <Text fontWeight='bold' mb='1rem'>
              Tem certeza que deseja deletar sua postagem?
             </Text>
              </ModalBody>
              <ModalFooter>
               <Button colorScheme='blue' mr={3} onClick={() => handleDelete(card._id)}>
                Delete
               </Button>
               <Button variant='ghost' onClick={onClose}>Close</Button>
              </ModalFooter>
             </ModalContent>
            </Modal>
            
            <CardBody className='w-full'>
              <Link to={`/details/${card._id}`} className="block">
              <Image
               src={`https://drumnotes-backend-1.onrender.com${card.image.replace('\\', '/')}`}
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
                  maxHeight='5.25rem'
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
