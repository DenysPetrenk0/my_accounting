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
          scale: 1.1;
        }

        &__icon {
          fill: ${(props) => props.colors.darkColors.title};
        }
      }
    }
  }
  
`;