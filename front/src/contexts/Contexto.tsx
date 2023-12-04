import { createContext, useEffect, useState } from "react";
import { ContextProps, WordProps } from "../types";
import service from "../services";

interface WordContextProps extends ContextProps {
    resetWords: () => void;
}

interface WordState {
    word: WordProps[];
}

type WordAction = 
    | { type: "setWords"; payload: WordProps[] }
    | { type: "createWord"; payload: { name: string } }

const WordReducer = (state: WordState, action: WordAction): WordState => {
    switch (action.type) {
        case "setWords":
            return {...state, word: action.payload}
    }
}

export const Contexto = createContext({} as ContextProps);
export function Provider({ children }: any) {
  const [words, setWords] = useState([] as WordProps[]);
  const list = async () => {};
  const create = async (name: string) => {};
  const remove = async (id: number) => {};

  useEffect(() => {
    async function fecthData() {
        try {
            const response = await list()
            dispatchEvent({type: "setWord", payload: response});
        } catch (error) {
            console.error ("Erro ao buscar dados do backend:", error);
        }
    }
    fecthData();
  }, []);
  return (
    <Contexto.Provider value={{ words, create, remove }}>
      {children}
    </Contexto.Provider>
  );
}
