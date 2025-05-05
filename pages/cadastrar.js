import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTarefas } from '../context/TarefaContext';

export default function Cadastrar() {
  const [nomeTarefa, setNomeTarefa] = useState('');
  const router = useRouter();
  const { adicionarTarefa } = useTarefas();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomeTarefa) {
      adicionarTarefa(nomeTarefa);
      router.push('/');
    }
  };

  return (
    <div style={{textAlign: 'center' }}>
      <h1>Cadastrar Nova Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Tarefa"
          value={nomeTarefa}
          onChange={(e) => setNomeTarefa(e.target.value)}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
