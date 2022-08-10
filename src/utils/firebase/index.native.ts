import firestore from '@react-native-firebase/firestore'
import getAuth from '@react-native-firebase/auth';

export const auth = getAuth()

export const db = firestore()
