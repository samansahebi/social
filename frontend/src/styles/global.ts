import { createGlobalStyle } from 'styled-components';
import IRANSansWeb from './IRANSansWeb.woff';
import IRANSansWeb2 from './IRANSansWeb.woff2';

export default createGlobalStyle`

@font-face {
  font-family: 'IRANSansWeb';
  src: local('IRANSansWeb'), local('IRANSansWeb'),
  url(${IRANSansWeb2}) format('woff2'),
  url(${IRANSansWeb}) format('woff');
  font-weight: 300;
  font-style: normal;
}
* {
  font-family: IRANSansWeb;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: IRANSansWeb;
    font-style: normal;
    font-weight: 500;
    font-size: 62.5%;
  }
  
  body {
    background: #F5F5F5;
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }

  button {
    cursor: pointer;
    border:none;
    outline: none;
  }

  input, button {
    font-family: IRANSansWeb;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  } 

  h5 {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,.9);
  }
`;
