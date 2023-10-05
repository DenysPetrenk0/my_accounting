import styled from "styled-components";

export const WeekPageStyled = styled.div `
    
  .week {
    
    &__container {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    
    &__current-day {
      text-align: right;
      margin-top: 40px;
      margin-bottom: 40px;
      margin-right: 40px;
      color: ${(props) => props.colors.darkColors.title};
      font-weight: 600;
      font-size: 27px;
      line-height: 1.5;
    }
    
    &__list {
      display: flex;
    }
    
    &__item {
      height: 200px;
      width: 130px;
      border: 2px solid ${(props) => props.colors.darkColors.text};
      border-radius: 20px;
      color: ${(props) => props.colors.darkColors.title};
      font-style: normal;
      text-align: center;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      
      &:not(:last-child) {
        margin-right: 5px;
      }
      
      &__name {
        padding: 5px 0;
        background: ${(props) => props.colors.darkColors.attention};
      }
      
      &__count {
        margin-top: 30px;
        font-size: 17px;
      }

      &:hover {
        scale: 1.05;
      }
    }
    
    &__button-arrow {
      border-radius: 50%;
      height: 44px;
      width: 44px;
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
`;