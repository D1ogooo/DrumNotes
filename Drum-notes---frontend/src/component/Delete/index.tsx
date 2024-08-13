import LixoIcon from '../../assets/bxs-trash.svg';

interface Props {
  size: string | number;
  color: string;
}

export const Delete: React.FC<Props> = ({ size, color }) => {
  return (
    <img
      src={LixoIcon}
      style={{
       width: size, height: size, backgroundColor: color, border: 'solid .12px #00000039', marginLeft: '.3125rem', marginTop: '.3125rem',
       borderRadius: '40%', padding: '5px'
      }}
      alt="Delete Icon"
    />
  );
};