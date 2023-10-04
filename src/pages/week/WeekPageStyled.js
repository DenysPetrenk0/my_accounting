import styled from "styled-components";

export const WeekPageStyled = styled.div `
    
  .week {
    &__container {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    
    &__current-day {
      text-align: center;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    
    &__list {
      display: flex;
    }
    
    &__item {
      height: 200px;
      width: 130px;
      border: 2px solid ${(props) => props.colors.darkColors.text};
      border-radius: 20px;
      padding: 10px 15px;
      color: ${(props) => props.colors.darkColors.title};
      font-style: normal;
      text-align: center;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5;
      
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
`;