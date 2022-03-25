import { StyledFooter, StyledLink } from "./AppFooter.styled";

export const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <span>&copy; {year} Developed by&nbsp;</span>
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
