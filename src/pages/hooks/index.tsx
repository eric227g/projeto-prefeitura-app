import { createContext, useContext, useMemo } from 'react';
import useLogic from './logic';
import { Props, IdiomaContextData } from './types';

const IdiomaContext = createContext<IdiomaContextData>({} as IdiomaContextData);

function IdiomaProvider({ children }: Props) {
  const {
    portugues,
    setPortugues,
} = useLogic();


  const contextValue = useMemo(
    () => ({
      portugues,
      setPortugues,
    }),[],
);

    // return <IdiomaContext.Provider value={contextValue}>
    //   {children}
    //   </IdiomaContext.Provider>;
}

function useIdioma() {
    const context = useContext(IdiomaContext);

    if (!context) {
        throw new Error('useIdioma must be used within an IdiomaProvider');
    }

    return context;
}

export { IdiomaProvider, useIdioma };
