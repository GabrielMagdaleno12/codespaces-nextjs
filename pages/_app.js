import { TarefaProvider } from '../context/TarefaContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <TarefaProvider>
      <Component {...pageProps} />
    </TarefaProvider>
  );
}