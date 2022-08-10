import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserCredential } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {
    emailAndPasswordSignIn,
    emailAndPasswordSignUp,
    onAuthStateChanged,
    authSignOut,
} from './logic';
import {
    ILoginPayload,
    IState,
    IUseLogicReturn,
} from './type';

const initialState = {
    isUserDataPresent: false,
    user: null,
    listener: null,
};

function useLogic(): IUseLogicReturn {
    const [authState, setAuthState] =
        useState<IState>(initialState);

    useEffect(() => {
        setAuthState(oldAuthState => {
            if (!oldAuthState.listener) {
                const listener = onAuthStateChanged(
                    user => {
                        setAuthState(oldState => ({
                            ...oldState,
                            isUserDataPresent: true,
                            user,
                        }));
                    },
                );

                return {
                    ...oldAuthState,
                    listener,
                };
            }

            return oldAuthState;
        });

        return () => {
            setAuthState(oldAuthState => {
                oldAuthState?.listener?.();
                return { ...initialState };
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signIn = (
        provider:
            | 'google'
            | 'email_and_password' = 'email_and_password',
        { email, password }: ILoginPayload = {
            email: '',
            password: '',
        },
    ): Promise<
        UserCredential | FirebaseAuthTypes.UserCredential
    > => {
        if (provider === 'google') {
             console.log('google');
        }
        return emailAndPasswordSignIn(email, password);
    };

    const signUp = (
        provider:
            | 'google'
            | 'email_and_password' = 'email_and_password',
        { email, password }: ILoginPayload = {
            email: '',
            password: '',
        },
    ): Promise<
        UserCredential | FirebaseAuthTypes.UserCredential
    > => {
        if (provider === 'google') {
          console.log('google');
        }
        return emailAndPasswordSignUp(email, password);
    };

    const signOut = (): void => {
        authSignOut();
        setAuthState(initialState);
    };

    return { signUp, signIn, signOut, authState };
}

export default useLogic;
