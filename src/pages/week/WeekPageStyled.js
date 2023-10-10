import styled from "styled-components";

export const WeekPageStyled = styled.div `
    
  .week {
    
    &__number {      
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 40px;
      
      &__box {
        display: flex;
        align-items: center;
      }

      &__current-day {
        color: ${(props) => props.colors.darkColors.title};
        font-weight: 700;
        font-size: 17px;
        line-height: 1.5;
      }

      &__current-week {
        color: ${(props) => props.colors.darkColors.title};
        font-weight: 700;
        font-size: 17px;
        line-height: 1.5;
        margin-right: 10px;
        margin-left: 10px;
      }

      &__button-arrow,
      &__button-add {
        border-radius: 50%;
        height: 35px;
        width: 35px;
        background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          scale: 1.5;
        }

        &__icon {
          fill: ${(props) => props.colors.darkColors.title};
        }
      }
      
      &__add {
        display: flex;
        
        &-input {
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
      }
    }
    
    &__content {
      border: 2px solid ${(props) => props.colors.darkColors.text};
      border-radius: 20px;
      margin: 15px;
      padding: 25px 10px;
      
      &__box {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-around;
      }
      
      &__title {
        color: ${(props) => props.colors.darkColors.text};
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5;
      }
      
      &__form {
        
        &__label {
          padding: 15px;
          border-radius: 100px;
          border: 1px solid ${(props) => props.colors.darkColors.title};
        }
        
        &__input {
          width: 100px;
          height: 40px;
          background: ${(props) => props.colors.darkColors.background};
          color: ${(props) => props.colors.darkColors.title};
          border: transparent;
        }
      }
    }
  }
  
`;