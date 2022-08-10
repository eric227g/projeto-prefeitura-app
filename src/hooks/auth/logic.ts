import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged as authOnAuthStateChanged,
  User,
  signOut,
} from 'firebase/auth';
import { auth } from '../../utils/firebase';


export const emailAndPasswordSignUp = (
  email: string,
  password: string,
) => {
  return createUserWithEmailAndPassword(
      auth,
      email,
      password,
  );
};

export const emailAndPasswordSignIn = (
  email: string,
  password: string,
) => {
  return signInWithEmailAndPassword(
      auth,
      email,
      password,
  );
};

export const onAuthStateChanged = (
  callback: (user: User | null) => void,
) => {
  const unsubscribe = authOnAuthStateChanged(
      auth,
      user => {
          if (user) {
              return callback(user);
          }
          return callback(null);
      },
  );

  return () => {
      unsubscribe();
  };
};

export const authSignOut = () => {
  signOut(auth);
};
