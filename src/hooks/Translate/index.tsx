import { createContext, useContext, useMemo } from 'react';
import useLogic from './logic';
import { Props, IdiomaContextData } from './types';

const IdiomaContext = createContext<IdiomaContextData>({} as IdiomaContextData);

function IdiomaProvider({ children }: Props) {
  const {
    language,
    setlanguage,
    i18n
} = useLogic();


  const contextValue = useMemo(
    () => ({
      language,
      setlanguage,
      i18n
    }),[language, setlanguage],
);

    return <IdiomaContext.Provider value={contextValue}>
      {children}
      </IdiomaContext.Provider>;
}

function useIdioma() {
    const context = useContext(IdiomaContext);

    if (!context) {
        throw new Error('useIdioma must be used within an IdiomaProvider');
    }

    return context;
}

export { IdiomaProvider, useIdioma };
