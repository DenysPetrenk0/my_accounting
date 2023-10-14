import styled from "styled-components";

export const ListCostStyled = styled.div `
  margin: 15px;
  
  .cost {
    border: 2px solid ${(props) => props.colors.darkColors.text};
    border-radius: 20px;
    padding: 25px 10px;
    
    &__box {
      margin-bottom: 25px;
      display: flex;
      justify-content: space-evenly;
    }

    &__title {
      width: 100px;
      text-align: center;
      color: ${(props) => props.colors.darkColors.text};
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5;

      &:first-child {
        width: 130px;
      }
    }
  }
`;