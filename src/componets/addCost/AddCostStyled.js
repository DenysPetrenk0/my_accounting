import styled from "styled-components";

export const AddCostStyled = styled.form `
  .cost-add {
    
    &__container {
      display: flex;
    }

    &__input {
      width: 225px;
      height: 40px;
      margin-right: 10px;
      border-radius: 100px;
      border: 1px solid ${(props) => props.colors.darkColors.title};
      background: ${(props) => props.colors.darkColors.background};
      padding-left: 15px;
      color: ${(props) => props.colors.darkColors.title};

      &::placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        opacity: 0.5;
        color: ${(props) => props.colors.darkColors.title};
      }
    }

    &__button {
      border-radius: 50%;
      height: 35px;
      width: 35px;
      background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;

      //&:hover {
      //  scale: 1.5;
      //}

      &__icon {
        fill: ${(props) => props.colors.darkColors.title};
      }
    }
  }
`;