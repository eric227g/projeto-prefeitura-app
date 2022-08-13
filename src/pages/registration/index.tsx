import { Text, ScrollView } from 'react-native';
import { CBlue, CPurple, CWhite, Container, ViewImage, ViewFormik, RegisterButton, TextRegisterButton, User } from './style'
import { Info } from '../profile/styles'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'pages/profile/styles';
import { CheckCircle } from 'phosphor-react-native';
import CreateUserController from '../../controller/createUser';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export default function Registration() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required("este é um campo obrigatorio"),
    password: Yup.string().required("este campo é obrigatorio"),
    name: Yup.string().required("este é um campo obrigatorio"),
    firstname: Yup.string().required("este é um campo obrigatorio"),
    secondname: Yup.string().required("este é um campo obrigatorio"),
    datebirth: Yup.string().required("este é um campo obrigatorio"),
  });

  const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const cadastrar = new CreateUserController()


  return (
    <>
      <ScrollView>
        <Container>
          <ViewImage>
            <CPurple></CPurple>
            <CBlue></CBlue>
            <CWhite></CWhite>
          </ViewImage>
          <Formik
            initialValues={{ email: '', password: '', name: '', firstname: '', secondname: '', datebirth: '' }}
            onSubmit={values => cadastrar.execute(values).then(() => (navigate.navigate('Home'))).catch(erro => console.log(erro))}
            validationSchema={SignupSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <ViewFormik>
                <Info style={{ color: '#ffff' }}> Email </Info>
                <User
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  isValid={!(errors.email && touched.email)}
                />
                {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
                <Info style={{ color: '#ffff' }}> Senha </Info>
                <User
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                  value={values.password}
                  isValid={!(errors.password && touched.password)}
                />
                {errors.password && touched.password ? <Text>{errors.password}</Text> : null}
                <Info style={{ color: '#ffff' }}> Nome de usuario </Info>
                <User
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  isValid={!(errors.name && touched.name)}
                />
                {errors.name && touched.name ? <Text>{errors.name}</Text> : null}
                <Info style={{ color: '#ffff' }}>Primeiro nome</Info>
                <User
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                  isValid={!(errors.firstname && touched.firstname)}
                />
                {errors.firstname && touched.firstname ? <Text>{errors.firstname}</Text> : null}
                <Info style={{ color: '#ffff' }}>Segundo nome</Info>
                <User
                  onChangeText={handleChange('secondname')}
                  onBlur={handleBlur('secondname')}
                  value={values.secondname}
                  isValid={!(errors.secondname && touched.secondname)}
                />
                {errors.secondname && touched.secondname ? <Text>{errors.secondname}</Text> : null}
                <Info style={{ color: '#ffff' }}>Data de nascimento</Info>
                <User
                  onChangeText={handleChange('datebirth')}
                  onBlur={handleBlur('datebirth')}
                  value={values.datebirth}
                  isValid={!(errors.datebirth && touched.datebirth)}
                />
                {errors.datebirth && touched.datebirth ? <Text>{errors.datebirth}</Text> : null}
                <RegisterButton type="submit" onPress={() => handleSubmit()}>
                  <TextRegisterButton>Cadastrar</TextRegisterButton>
                  <Icon><CheckCircle size={32} color='#FFFF' /></Icon>
                </RegisterButton>
              </ViewFormik>
            )}
          </Formik>
        </Container>
      </ScrollView>
    </>
  )
}
