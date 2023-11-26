interface Props {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: string | false;
}
const Title: React.FC<Props> = ({ children, size = 'lg', color }) => {
  let textSizeClass = '';

  switch (size) {
    case 'lg':
      textSizeClass = 'text-4xl';
      break;
    case 'md':
      textSizeClass = 'text-2xl';
      break;
    case 'sm':
      textSizeClass = 'text-lg';
      break;
    default:
      textSizeClass = 'text-xl';
  }

  return <h2 className={`font-bold ${textSizeClass} ${color}`}>{children}</h2>;
};

export default Title;
