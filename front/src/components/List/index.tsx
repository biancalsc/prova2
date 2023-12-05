import { Provider, useWord } from "../../hooks";
import { ContextProps, WordProps } from "../../types";
import styled from "styled-components";
const StyledDiv = styled.div`
  display: flex;
`;

interface StyledWordDivProps extends ContextProps {
    onClick: () => void;
}

const StyledWordDiv = styled.div<StyledWordDivProps>`
background: red;
color: white;
width: 50px;
heigth: 50px;
`

export default function List(){
    const {words}  = useWord();

    return (
        <div>
            <Provider>

            </Provider>
            {
                JSON.stringify(words)
            }
        </div>
    );
}