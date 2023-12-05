import { createContext, useEffect, useState } from "react";
import { ContextProps, WordProps } from "../types";
import service from "../services";

export const Contexto = createContext({} as ContextProps);

export function Provider({ children }: any) {
  const [words, setWords] = useState([] as WordProps[]);

  const list = async () => {
    try {
      const wordList = await service.list();
      setWords(wordList);
      console.log("words", words);
    } catch (error) {
      console.error("Erro ao buscar os nomes:", error);
    }
  };

  const create = async (name: string) => {
    try {
      await service.create(name);
      await list();
    } catch (error) {
      console.error("Erro ao escrever o nome:", error);
    }
  };

  const remove = async (id: number) => {
    try {
      await service.remove(id);
      await list();
    } catch (error) {
      console.error("Erro ao remover o nome:", error);
    }
  };

  useEffect(() => {
    list();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Contexto.Provider value={{ words, create, remove }}>
      {children}
    </Contexto.Provider>
  );
}
