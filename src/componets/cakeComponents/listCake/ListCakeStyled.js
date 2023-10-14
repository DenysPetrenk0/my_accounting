import styled from "styled-components";

export const ListCakeStyled = styled.div `
  margin: 23px auto 0;
  border: 2px solid ${(props) => props.colors.darkColors.text};
  border-radius: 20px;
  padding: 46px;
  width: 1023px;
  
  .cake__list {
    
    &__title {
      display: flex;
      margin-bottom: 29px;
      padding: 0 15px;
      
      & p {
        width: 100px;
        margin-right: 10px;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: ${(props) => props.colors.darkColors.title};
      }
    }
  }
`;