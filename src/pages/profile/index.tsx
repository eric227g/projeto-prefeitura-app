import { View, Text } from 'react-native';
import {BackgroundPurple,
BackgroundBlue,
Prefile,
Photo,
Name,
Button,
Sair,
Icon,
Background,
ContainerProfile,
Container,
Info,
User
} from './styles'
import { SignOut } from 'phosphor-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Profile() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("este é um campo obrigatorio"),
    first_name: Yup.string().required("este é um campo obrigatorio"),
    second_name: Yup.string().required("este é um campo obrigatorio"),
    date_birth: Yup.string().required("este é um campo obrigatorio"),
  });

  return (
    <>
    <ScrollView>
      <Background>
        <BackgroundPurple source={require('../../imagens/Purple.png')} />
        <BackgroundBlue source={require('../../imagens/Blue.png')} />
      </Background>
      <ContainerProfile>
        <Prefile>Perfil</Prefile>
        <Name> Gabriel Poyer </Name>
        <View>
          <Photo />
        </View>
      </ContainerProfile>
      <Formik
      initialValues={{ name: '', first_name: '', second_name: '', date_birth: '' }}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <Container>
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
            <Button>
              <Sair>Sair</Sair>
              <Icon><SignOut color='#465EFF' /></Icon>
            </Button>
          </Container>
        </View>
      )}
    </Formik>

      </ScrollView>
    </>
  );
}
