import styled from "styled-components";

export const HeadeerListStyled = styled.ul`
  display: flex;

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
