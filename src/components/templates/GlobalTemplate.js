import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalTemplate = createGlobalStyle`
  ${reset}
  #root {
    width:100%;
    height:100%;
  }
  input:focus {
  outline: none;
}
`;

export default GlobalTemplate;