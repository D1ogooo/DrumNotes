import React from 'react';
import { Card, CardBody, Stack, Image, Heading, Text, Divider } from '@chakra-ui/react'
import { Delete } from '../Delete';
import { Link } from 'react-router-dom';
import { data } from '../../Pages/Home/Detail/data';

function DeleteCard(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  e.stopPropagation();
  e.preventDefault();
  console.log('Bom dia');
}

export const CardItem = () => {
  return (
    <>
      {data.map((card, id) => (
        <Card key={id} maxW='sm' className="bg-background-card h-auto w-[20rem] rounded-[10px] p-[.7rem]">
          <CardBody>
        <Link to={`/details/${id}`} className="block">
            <Image
              src={card.image}
              alt={card.title}
              borderRadius='lg'
            />
          </Link>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{card.title}</Heading>
              <Text>
                {card.conteudo}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <div onClick={DeleteCard} className='fixed cursor-pointer'>
           <Delete size={27} color="#fff"/>
          </div>
        </Card>
      ))}
    </>
  );
};
