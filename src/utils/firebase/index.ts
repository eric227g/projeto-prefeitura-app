import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import key  from './keyfirebase.json'

const app = initializeApp(key);

export const db = getFirestore(app);

export const auth = getAuth();
