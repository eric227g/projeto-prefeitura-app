import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { CBlue, CPurple, CWhite, Container, ViewImage, ViewFormik, RegisterButton, TextRegisterButton} from './style'
import {
Info,
User
} from '../profile/styles'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'pages/profile/styles';
import { CheckCircle } from 'phosphor-react-native';



export default function Registration(){
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required("este é um campo obrigatorio"),
    password: Yup.string().required("este campo é obrigatorio"),
    name: Yup.string().required("este é um campo obrigatorio"),
    first_name: Yup.string().required("este é um campo obrigatorio"),
    second_name: Yup.string().required("este é um campo obrigatorio"),
    date_birth: Yup.string().required("este é um campo obrigatorio"),
  });


  return(
        <Container>
            <ViewImage>
              <CPurple></CPurple>
              <CBlue></CBlue>
              <CWhite></CWhite>
            </ViewImage>
              <Formik
                initialValues={{ email:'', password:'', name: '', first_name: '', second_name: '', date_birth: '' }}
                onSubmit={values => alert(JSON.stringify(values, null, 2))}
                validationSchema={SignupSchema}
              >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

              <ViewFormik>
                <Info style={{ color: '#B9B9B9' }}> Email </Info>
                  <User
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    isValid={!(errors.email && touched.email)}
                  />
                  {errors.email && touched.email ? <Text>{errors.email}</Text> : null} <br />
                  <Info style={{ color: '#B9B9B9' }}> Senha </Info>
                  <User
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    isValid={!(errors.password && touched.password)}
                  />
                  {errors.password && touched.password ? <Text>{errors.password}</Text> : null} <br />
                  <Info style={{ color: '#B9B9B9' }}> Nome de usuario </Info>
                  <User
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    isValid={!(errors.name && touched.name)}
                  />
                  {errors.name && touched.name ? <Text>{errors.name}</Text> : null} <br />
                  <Text style={{ color: '#B9B9B9' }}>Primeiro nome</Text>
                  <User
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    value={values.first_name}
                    isValid={!(errors.first_name && touched.first_name)}
                  />
                  {errors.first_name && touched.first_name ? <Text>{errors.first_name}</Text> : null} <br />
                  <Text style={{ color: '#B9B9B9' }}>Segundo nome</Text>
                  <User
                    onChangeText={handleChange('second_name')}
                    onBlur={handleBlur('second_name')}
                    value={values.second_name}
                    isValid={!(errors.second_name && touched.second_name)}
                  />
                  {errors.second_name && touched.second_name ? <Text>{errors.second_name}</Text> : null} <br />
                  <Text style={{ color: '#B9B9B9' }}>Data de nascimento</Text>
                  <User
                    onChangeText={handleChange('date_birth')}
                    onBlur={handleBlur('date_birth')}
                    value={values.date_birth}
                    isValid={!(errors.date_birth && touched.date_birth)}
                  />
                  {errors.date_birth && touched.date_birth ? <Text>{errors.date_birth}</Text> : null} <br />
                  <RegisterButton>
                    <TextRegisterButton>Cadastrar</TextRegisterButton>
                    <Icon><CheckCircle size={32} color='#FFFF' /></Icon>
                  </RegisterButton>
              </ViewFormik>
            )}
            </Formik>
        </Container>
  )
}
