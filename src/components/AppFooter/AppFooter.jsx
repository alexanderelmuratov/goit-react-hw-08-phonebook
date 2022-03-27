import { StyledFooter, StyledHeart, StyledLink } from "./AppFooter.styled";

export const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <span>&copy; {year} Developed with&nbsp;</span>
      <StyledHeart>❤</StyledHeart>
      <span>&nbsp;by&nbsp;</span>
      <StyledLink
        href="https://github.com/alexanderelmuratov"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alexander Elmuratov
      </StyledLink>
    </StyledFooter>
  );
};
