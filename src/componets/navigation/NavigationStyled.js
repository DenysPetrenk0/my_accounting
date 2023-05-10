import styled from "styled-components";

export const NavigationStyled = styled.ul`
  border-right: 2px solid ${(props) => props.colors.darkColors.text};
  width: 290px;
  padding-top: 40px;
  
  .navListItem {
    
  }

  .navListItem:not(:last-child) {
    margin-bottom: 13px;
  }

  .vanListLink {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 273px;
    height: 54px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.colors.darkColors.title};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  .vanListLink:hover {
    background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
}
`;