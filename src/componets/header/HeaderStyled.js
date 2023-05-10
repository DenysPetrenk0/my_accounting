import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 83px;
  border-bottom: 2px solid ${(props) => props.colors.darkColors.text};
  background-color: ${(props) => props.colors.darkColors.background};
  display: flex;
  align-items: center;
  padding: 0 40px;

  .header {
    
    &__logo {
      font-weight: 700;
      font-size: 20px;
      color: ${(props) => props.colors.darkColors.text};
      text-transform: uppercase;
    }
    
    &__logo__icon {
      margin-right: 10px;
      fill: ${(props) => props.colors.darkColors.text};
    }
  }
`;
