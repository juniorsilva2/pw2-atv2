
import styled from "styled-components";

type TotalizerProps = {
    textColor: string;
}

export const Container = styled.div`
    height: 100vh;
`;

export const Header = styled.div`
    position: absolute;
    width: 100%;
    z-index: 0;
    height: 150px;
    background-color: #0d0d0d;
    display: grid;
    place-items: center;

    h1 {
        color: #4ea8de;
    }

`;

export const ContainerTodo = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    margin-top: 130px;
    display: flex;
    justify-content: center;

    & > div:nth-child(1) {

        width: 600px;

    }

`;

export const SearchContainer = styled.div`
    height: 40px;
    display: grid;
    grid-template-columns: 85% 15%;

    input {
        border: none;
        background-color: #262626;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 17px;
        color: #808080;

        &::placeholder {
            color: #808080;
            font-size: 17px;
        }

    }

    button {
        margin-left: 10px;
        background-color: #4ea8de;
        border-radius: 5px;
        border: none;
        color: #FFF;
        font-weight: bold;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > svg {
            margin-left: 5px;
        }

    }

`;

export const Totalizers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
`;

export const Totalizer = styled.h3<TotalizerProps>`
    color: ${(props) => props.textColor};
    font-size: 15px;

    span {
        color: #FFF;
        background-color: #333333;
        border-radius: 10px;
        padding: 0 10px;
        margin-left: 10px;
        font-weight: 600;
    }

`;

export const ContainerTecs = styled.div`
    margin-top: 30px;

`;

export const ListTecsIsEmpty = styled.div`
    padding-top: 50px;
    border-top: 2px solid #262626;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 18px;
        color: #808080;
    }

    h3:nth-child(2) {
        font-weight: normal;
    }

`;