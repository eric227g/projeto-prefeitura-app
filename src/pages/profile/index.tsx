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
import { useAuth } from 'hooks/auth';

export default function Profile() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("este é um campo obrigatorio"),
    first_name: Yup.string().required("este é um campo obrigatorio"),
    second_name: Yup.string().required("este é um campo obrigatorio"),
    date_birth: Yup.string().required("este é um campo obrigatorio"),
  });

  const { signOut, user } = useAuth()

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
      onSubmit={values =>  signOut() }
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <Container>
            <Info style={{ color: '#888888' }}> Nome de usuario </Info>
            <User> resposta </User>
            <Text style={{ color: '#888888' }}>Primeiro nome</Text>
            <User> resposta </User>
            <Text style={{ color: '#888888' }}>Segundo nome</Text>
            <User> resposta </User>
            <Text style={{ color: '#888888' }}>Data de nascimento</Text>
            <User> resposta </User>
            <Button type="submit" onPress={handleSubmit}>
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
