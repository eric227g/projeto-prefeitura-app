import authStatic, {
  FirebaseAuthTypes,
} from '@react-native-firebase/auth';
import { auth } from '../../utils/firebase/index.native';


export const emailAndPasswordSignIn = (
  email: string,
  password: string,
) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const onAuthStateChanged = (
  callback: (user: FirebaseAuthTypes.User | null) => void,
) => {
  const unsubscribe = auth.onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
      if (user !== null) {
          return callback(user);
      }
      return callback(null);
  });

  return () => {
      unsubscribe();
  };
};

export const authSignOut = () => {
  auth.signOut();
};
