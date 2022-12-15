import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalTemplate = createGlobalStyle`
  ${reset}
  #root {
    width:100%;
    height:100%;
  }
  ul {
    list-style: none;
  }

  input:focus {
  outline: none;
  }

  button {
    border:none ;
  }
`;

export default GlobalTemplate;
