import { useReducer, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function useLogic() {
  const [ portugues, setPortugues ] = useState()


  const saveIdiomaPortugues = (value: Boolean) => {
    AsyncStorage.setItem('portugues', value.toString()).then(() => {setPortugues(portugues)})
  }


  return {
    portugues,
    setPortugues: saveIdiomaPortugues,
};
}
