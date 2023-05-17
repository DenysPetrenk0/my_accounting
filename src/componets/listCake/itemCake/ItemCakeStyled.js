import styled from "styled-components";

export const ItemCakeStyled = styled.li `
  border: 1px solid ${(props) => props.colors.darkColors.text};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 15px;
  margin-bottom: 10px;
  
  .cake__item {
    
    &__text {
      display: flex;
      justify-content: space-between;
    }
  }
  
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${(props) => props.colors.darkColors.title};
  }
`;