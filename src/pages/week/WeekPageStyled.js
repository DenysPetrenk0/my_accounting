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

      &__button-arrow {
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
    }
    
    &__content {
      border: 2px solid ${(props) => props.colors.darkColors.text};
      border-radius: 20px;
      margin: 15px;
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
      
      &__form {
        
        &__label {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
          padding: 10px 5px;
          border-radius: 100px;
          border: 1px solid ${(props) => props.colors.darkColors.title};
        }
        
        &__input {
          width: 100px;
          height: 40px;
          background: ${(props) => props.colors.darkColors.background};
          color: ${(props) => props.colors.darkColors.title};
          border:transparent;
          text-align: center;
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
            justify-content: space-around;
            width: 130px;
            height: 40px;
          }
        }

        &__button {

          &-del {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: ${(props) => props.colors.darkColors.down};
          }
        }
      }
    }
  }
  
`;