import { IdiomaProvider } from './Translate/index'

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
      <IdiomaProvider>
        {children}
      </IdiomaProvider>
  );
}

export default AppProvider;
