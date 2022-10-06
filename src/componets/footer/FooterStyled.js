import styled from "styled-components";

export const FooterStyled = styled.footer`
  height: 60px;
  border-top: 3px solid ${(props) => props.colors.darkColors.main};
  background-color: ${(props) => props.colors.darkColors.background};
  display: flex;
  align-items: center;
  padding: 0 40px;
  justify-content: end;

  .footerLogo {
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.colors.darkColors.main};
    text-transform: uppercase;
  }
`;