
export interface Props {
    children: React.ReactNode;
}

export interface IdiomaContextData {
    portugues: boolean;
    setPortugues: (value: boolean) => void;
    ingles: boolean;
    setIngles: (value: boolean) => void;
    Japones: boolean;
    setJapones: (value: boolean) => void;
}

