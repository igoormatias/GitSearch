import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:0;
}

html, body , #root {
    min-height: 100%;
}
body {
    /* background: #1C1C1C; */
    background-image: linear-gradient(to bottom, #1e90ff, #1C1C1C);
    -webkit-font-smoothing: antialiased !important;
}
 body, input, button {
     color: #222;
     font-size: 14px;
     font-family: Arial, Helvetica, sans-serif;
 }

 button {
     cursor: pointer;
 }
`;
