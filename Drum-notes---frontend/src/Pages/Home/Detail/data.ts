import imagemTeste from '../../../assets/print para testes[.png'

interface CardaData {
  id: number,
  title: string,
  conteudo: string,
  image: string,
  video?: string,
}

export const data: CardaData[] = [
 {
  id: 0,
  title: 'Tua graca me basta',
  conteudo: 'quuntur obcaecati, rleniti voluptate, totam maaame! Dolorem magni sit ducimus!',
  image: `${imagemTeste}`,
  video: 'https://www.youtube.com/watch?v=ElIqwEKxV2M&list=RDElIqwEKxV2M&start_radio=1',
 },
]