import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    margin: 0;
    background: rgb(236, 221, 226);
    .grid{
        margin-top: 3rem;
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: center;
        gap: 2%;
    }

     @media (max-width: 768px) {
        .grid{
            grid-template-columns: auto auto auto ;
        }
    }
`