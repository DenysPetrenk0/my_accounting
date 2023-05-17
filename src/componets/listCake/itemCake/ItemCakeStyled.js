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
      
      & p {
        width: 100px;
        margin-right: 10px;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: ${(props) => props.colors.darkColors.title};
      }
    }
  }

  button {
    width: 91px;
    height: 27px;
    border-radius: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.5;
    color: ${(props) => props.colors.darkColors.title};
    background: #5DF888;
  }
`;