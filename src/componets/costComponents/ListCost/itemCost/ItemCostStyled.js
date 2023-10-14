import styled from "styled-components";

export const ItemCostStyled = styled.form `
  margin-bottom: 5px;
  
  .cost {
    &__container {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      padding: 10px 5px;
      border-radius: 100px;
      border: 1px solid ${(props) => props.colors.darkColors.title};
    }

    &__name {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
      color: ${(props) => props.colors.darkColors.title};

      &__box {
        display: flex;
        align-items: center;
        justify-content: space-between;;
        width: 130px;
        height: 40px;
      }
    }

    &__button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.colors.darkColors.down};
      cursor: default;

      &__icon {
        fill: ${(props) => props.colors.darkColors.title};
      }
      
      &:hover {
        scale: 1.1;
      }
    }

    &__input {
      width: 100px;
      height: 40px;
      background: ${(props) => props.colors.darkColors.background};
      color: ${(props) => props.colors.darkColors.title};
      border:transparent;
      text-align: center;
    }
  }      
`;