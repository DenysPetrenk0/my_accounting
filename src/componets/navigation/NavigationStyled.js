import styled from "styled-components";

export const NavigationStyled = styled.ul`
  border-right: 2px solid ${(props) => props.colors.darkColors.text};
  width: 290px;

  .headerListItem:not(:last-child) {
    margin-right: 10px;
  }

  .headerListLink {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.colors.darkColors.main};

    &:hover {
      color: ${(props) => props.colors.darkColors.active};
    }
  }
`;