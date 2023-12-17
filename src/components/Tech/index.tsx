import { Container, RadioButton } from "./style";
import { FiTrash2, FiCheck } from 'react-icons/fi';

interface Props {
    index: number;
    checked: boolean;
    text: string;
    deleteFunction: (index: number) => void;
    checkOrUnCheckFunction: (index: number, status: boolean) => void;
}

export const Tech = ({ index, text, checked, checkOrUnCheckFunction, deleteFunction }: Props) => {

    return (
        <Container>
            <RadioButton
                checked={checked}
                onClick={() => checkOrUnCheckFunction(index, !checked)}>
                <FiCheck />

            </RadioButton>
            <p>{text}</p>
            <FiTrash2
                onClick={() => deleteFunction(index)}
            />
        </Container>
    );

}