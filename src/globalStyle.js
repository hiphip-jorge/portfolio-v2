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
        height: 20px;
        background: #1b1b1b;
    }

    .current {
        background: #5fe0b7;
    }

    .section-header {
        margin: 1em 0;
        color: #1d1d1d;
        text-align: center;
        margin-bottom: 0.5em;
    }

    .intro {
        font-size: 12px;
        line-height: 1.4em;
        margin: 1em auto 2em;
        color: #3d3d3d;
    }

`;
