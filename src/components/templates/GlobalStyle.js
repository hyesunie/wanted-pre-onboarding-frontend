import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root {
    width:100%;
    height:100%;
  }
  input:focus {
  outline: none;
}
`;

export default GlobalStyle;
