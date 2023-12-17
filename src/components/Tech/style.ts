import styled from "styled-components";

type RadioButtonProps = {
    checked: boolean;
}

export const Container = styled.div`
    background-color: #262626;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    border: 0.1px solid #333333;
    
    p {
        width: 100%;
        color: #FFF;
        margin: 0 20px;
        text-align: start;
    }

   & > svg {
        color: #7a7a7a;
        width: 22px;
        height: 22px;
        margin: 0;

    &:hover {
        cursor: pointer;
    }

    }

`;

export const RadioButton = styled.button<RadioButtonProps>`
    border: none;
    width: 20px;
    height: 20px;
    border: 2px solid #4ea8de;
    background-color: ${(props) => props.checked ? '#4ea8de' : 'transparent'};
    display: grid;
    place-items: center;
    border-radius: 50%;
    padding: 2px;

    & > svg {
        font-size: 15px;
        color: ${(props) => props.checked ? '#FFF' : 'transparent'};
    }

    &:hover {
        cursor: pointer;
    }

`;