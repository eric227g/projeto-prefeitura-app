import { View, Text, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, ImageDetails, BtnLogIn, DivInputs, SignInSign, Letreiro, TxtButton } from './style';
import { IdiomaProvider, useIdioma } from 'hooks/Translate';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export default function Login() {
  const { i18n } = useIdioma()

  return (
<>
    <ImageDetails source={require('../../imagens/balls.png')} />
    <Image
      source={require('../../imagens/logoteste.png')}
      style={{position: 'absolute', height: '150px', width: '150px'}} />
    <Letreiro>Cidadão Informa</Letreiro>
    <SignInSign>Entrar</SignInSign>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
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
              <TxtButton>Entrar</TxtButton>
            </BtnLogIn>
          </DivInputs>
        </View>
      )}
    </Formik>
  </>
  )
}
