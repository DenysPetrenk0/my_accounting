import styled from "styled-components";

export const AddCakeStyled = styled.form `
  margin-left: 230px;
  
  input {
    border: 1px solid ${(props) => props.colors.darkColors.text};
    background-color: ${(props) => props.colors.darkColors.background};
    width: 150px;
    height: 42px;
    border-radius: 30px;
    margin-right: 10px;
    padding-left: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 2;
    letter-spacing: 0.1px;
    color: ${(props) => props.colors.darkColors.text};
    
    &::placeholder {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 2;
      letter-spacing: 0.1px;
      color: ${(props) => props.colors.darkColors.text};
    }
  }
  
  button {
    width: 134px;
    height: 42px;
    border-radius: 30px;
    color: ${(props) => props.colors.darkColors.text};
    background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
    
    :hover {
      transform: scale(1.1);
    }
  }
`;