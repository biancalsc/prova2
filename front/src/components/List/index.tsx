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
heigth: 50 px;
`

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  height: 45px;
`;

export default function List(){
    const {words}  = useWord();

    return (
        <div>
            <Provider>
                {words.map((words: WordProps) => (
                    <StyledWordDiv>
                        key={words.id}
                        id={words.id}
                        onClick={() => }
                    </StyledWordDiv>
                ))}
            </Provider>
            {
                JSON.stringify(words)
            }
        </div>
    );
}