import { createGlobalStyle } from 'styled-components';

// Theme 
// "off-black": #1b1b1b
// "off-white": #faf9f6
// "nice-green": #5fe0b7



export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: #faf9f6;
        color: #5fe0b7;
    }


    .indicator-container {
        display: flex;
        gap: 5px;
    }

    .indicator {
        width: 5px;
        height: 25px;
        background: #1b1b1b;
    }

    .current {
        background: #5fe0b7;
    }
`;
