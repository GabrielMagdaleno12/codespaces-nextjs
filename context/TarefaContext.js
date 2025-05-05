// context/TarefaContext.js
import { createContext, useContext, useState } from 'react';

const TarefaContext = createContext();

export const TarefaProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas((prevTarefas) => [...prevTarefas, tarefa]);
  };

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefas = () => {
  return useContext(TarefaContext);
};