import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { i18n } from '../../translate';


export default function useLogic() {
  const [ language, setlanguage ] = useState(i18n.locale)

  useEffect(() => {
    AsyncStorage.getItem('language').then(value => {
        if (value !== null) {
            i18n.locale = value
            setlanguage(value);
        }
    });
}, []);


  const saveIdiomalanguage = (value: string) => {
    AsyncStorage.setItem('language', value).then(() => {
      i18n.locale = value;
      setlanguage(value);
    })
  }


  return {
    language,
    setlanguage: saveIdiomalanguage,
    i18n
};
}
