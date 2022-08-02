
export interface Props {
    children: React.ReactNode;
}

export interface IdiomaContextData {
    language: string;
    setlanguage: (value: string) => void;
    i18n: typeof i18n
}

