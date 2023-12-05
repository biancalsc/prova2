import React from "react";
import { Provider, useWord } from "../../hooks";
import { WordProps } from "../../types";
import styled from "styled-components";
import service from "../../services";

const StyledDiv = styled.div`
  display: flex;
`;

const StyledWordDiv = styled.div`
  background: orange;
  color: white;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 5px;
  margin: 2px;
`;

export default function List() {
  const { words } = useWord();

  return (
    <div>
      <Provider>
        {words.map((word: WordProps) => (
          <StyledDiv key={word.id} >
            {word.chars.map((char, index) => (
              <StyledWordDiv onClick={e => service.remove(word.id)} key={index}>{char}</StyledWordDiv>
            ))}
          </StyledDiv>
        ))}
      </Provider>
    </div>
  );
}