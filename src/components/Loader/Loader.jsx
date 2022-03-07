import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots color="#034f84" height={70} width={80} />
    </LoaderWrapper>
  );
};
