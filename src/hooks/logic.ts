import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Idioma } from 'translate';


export default function useLogic() {
  const [ portugues, setPortugues ] = useState(Idioma)

  useEffect(() => {
    AsyncStorage.getItem('portugues').then(value => {
        if (value !== null) {
            setPortugues(value);
        }
    });
}, []);


  const saveIdiomaPortugues = (value: boolean) => {
    AsyncStorage.setItem('portugues', value.toString()).then(() => {setPortugues(portugues)})
  }


  return {
    portugues,
    setPortugues: saveIdiomaPortugues,
};
}
