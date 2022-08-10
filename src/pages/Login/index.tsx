import { View, Text, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, ImageDetails, BtnLogIn, DivInputs, SignInSign, Letreiro, TxtButton } from './style';
import { useIdioma } from 'hooks/Translate';
import { useAuth } from 'hooks/auth/index';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'routes/types';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required("este é um campo obrigatorio"),
  password: Yup.string().required("este é um campo obrigatorio"),
});

export default function Login() {
  const { i18n } = useIdioma()

  const { signIn } = useAuth()

  const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <>
      <ImageDetails source={require('../../imagens/balls.png')} />
      <Image
        source={require('../../imagens/Logo_CidadaoInforma2.png')}
        style={{ position: 'absolute', height: '200px', width: '200px' }} />
      <SignInSign>Entrar</SignInSign>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => signIn('email_and_password', values).then(() => navigate.navigate('Home'))}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <DivInputs>
              <Text style={{ color: '#B9B9B9' }}>{i18n.t('email_address')}</Text>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                isValid={!(errors.email && touched.email)}
              />
              {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
              <Text style={{ color: '#B9B9B9' }}>Senha</Text>
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={true}
                value={values.password}
                isValid={!(errors.password && touched.password)}
              />
              {errors.password && touched.password ? <Text>{errors.password}</Text> : null}
              <BtnLogIn onPress={() => handleSubmit()}>
                <TxtButton type='submit'>Entrar</TxtButton>
              </BtnLogIn>
            </DivInputs>
          </View>
        )}
      </Formik>
    </>
  )
}
