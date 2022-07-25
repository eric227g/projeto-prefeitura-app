import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { i18n } from 'translate';

// type Opitions = 'pt-BR' | 'en-US' |'ja'

export default function useLogic() {
  const [ portugues, setPortugues ] = useState(i18n.locale)

  useEffect(() => {
    AsyncStorage.getItem('portugues').then(value => {
        if (value !== null) {
            setPortugues(value);
        }
    });
}, []);


  const saveIdiomaPortugues = (value: string) => {
    AsyncStorage.setItem('portugues', value).then(() => {setPortugues(portugues)})
  }


  return {
    portugues,
    setPortugues: saveIdiomaPortugues,
};
}
