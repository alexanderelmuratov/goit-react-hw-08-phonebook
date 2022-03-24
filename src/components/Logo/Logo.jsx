import { LogoWrapper, LogoImg} from './Logo.styled';
// import defaultLogo from './phonebook-1.svg';
import defaultLogo from './phonebook-2.svg';


export const Logo = () => {
  const logo = defaultLogo;

  return (
    <LogoWrapper>
      {/* <LogoImg src={logo} alt="Phonebook-1" width="50" /> */}
      <LogoImg src={logo} alt="Phonebook-2" width="80" />
    </LogoWrapper>
  );
};
