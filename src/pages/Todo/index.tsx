import { useState } from "react";
import { Tech } from "../../components/Tech";
import {
    Container,
    Header,
    ContainerTodo,
    SearchContainer,
    Totalizers,
    Totalizer,
    ListTecsIsEmpty,
    ContainerTecs
} from "./style"

interface TecProps {
    checked: boolean;
    text: string;
}

import { FiPlusCircle } from "react-icons/fi";


export const Todo = () => {

    const [tecs, setTecs] = useState<Array<TecProps>>([]);
    const [inputTech, setInputTec] = useState('');

    function handleAddNewTech () {


        let index = tecs.findIndex((e) => e.text == inputTech);

        if (index == -1) {

            const newTech: TecProps = {
                checked: false,
                text: inputTech,
            }

            setTecs([...tecs, newTech]);

        } else {
            aelrt("Tecnologia já inserida, por favor informe uma diferente.");
        }

    }

    function handleConfirm(index: number, status: boolean) {

        let oldTecs = tecs.map(e => e)

        oldTecs[index].checked = status;

        setTecs(oldTecs);

    }

    function handleDeleteTec(index: number) {

        let oldTecs = tecs.map(e => e);

        oldTecs.splice(index, 1);

        setTecs(oldTecs);

    }


    return (
        <Container>
            <Header>
                <h1>Minha Lista de Tecnologias</h1>
            </Header>
            <ContainerTodo>
                <div>
                    <SearchContainer>
                        <input 
                            type="text" 
                            placeholder="adicione uma nova tecnologia"
                            value={inputTech}
                            onChange={(e) => setInputTec(e.target.value)}
                        />
                        <button onClick={() => handleAddNewTech()}>
                            Criar
                            <FiPlusCircle />
                        </button>
                    </SearchContainer>
                    <Totalizers>
                        <Totalizer textColor="#4ea8de">
                            Tecnologias criadas
                            <span>{tecs.length}</span>
                        </Totalizer>
                        <Totalizer textColor="#7576de">
                            Concluidas
                            <span>
                                {
                                    tecs.length == 0 ? 0 : `${tecs.filter(e => e.checked).length} de ${tecs.length}`
                                }
                            </span>
                        </Totalizer>
                    </Totalizers>

                    <ContainerTecs>

                        {
                            tecs.length == 0
                                ? (
                                    <ListTecsIsEmpty>
                                        <h3>Você ainda não tem tecnologias cadastradas</h3>
                                        <h3>Crie a tecnologia e organize seus itens a fazer</h3>
                                    </ListTecsIsEmpty>
                                )
                                : tecs.map((tec, index) => (
                                    <Tech
                                        key={index}
                                        index={index}
                                        checked={tec.checked}
                                        checkOrUnCheckFunction={handleConfirm}
                                        deleteFunction={handleDeleteTec}
                                        text={tec.text}
                                    />
                                ))
                        }



                    </ContainerTecs>
                </div>
            </ContainerTodo>
        </Container>
    );

}
