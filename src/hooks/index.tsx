import { AuthProvider } from './auth';
import { IdiomaProvider } from './Translate/index'

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <>
      <AuthProvider>
        <IdiomaProvider>
          {children}
        </IdiomaProvider>
      </AuthProvider>
    </>
  );
}

export default AppProvider;
