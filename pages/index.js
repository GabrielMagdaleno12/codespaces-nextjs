import Link from 'next/link';
import { useTarefas } from '../context/TarefaContext';

export default function Home() {
  const { tarefas } = useTarefas();

  return (
    <div style={{textAlign: 'center' }}>
      <h1>Sistema de Cadastro de Tarefas</h1>
      <Link href="/cadastrar">
        <button>Cadastrar Nova Tarefa</button>
      </Link>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}