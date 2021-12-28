import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 30%;
    margin: auto;

    input{
        width: 50%;
        padding: .5rem;
        border: 1px solid black;
        border-radius: .3rem;
        margin-bottom: .5rem;
    }

    input:focus{
        outline: none;
    }

    button{
        cursor: pointer;
        color: white;
        border-radius: 5px;
        border: none;
        background-color: rgb(4, 100, 243);
        width: 75%;
        padding: .6rem 0;
        font-size: .9rem;
        margin-bottom: .5rem;
    }
    
    button:hover{
        filter: brightness(90%);
    }
`