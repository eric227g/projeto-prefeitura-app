import { View, Text } from 'react-native';
import {BackgroundPurple,
BackgroundBlue,
Prefile,
Photo,
Name,
User,
Info,
Container,
Button,
Sair,
Icon
} from './styles'
import { SignOut } from 'phosphor-react-native';

export default function Profile() {
  return (
    <>
      <View>
        <BackgroundPurple source={require('../../imagens/Purple.png')} />
        <BackgroundBlue source={require('../../imagens/Blue.png')} />
        <Prefile>Perfil</Prefile>
        <Photo />
        <Name> Gabriel Poyer </Name>
      </View>
      <Container>
        <Info>Nome de usuario</Info>
        <User>Anonimo</User>
        <Info>Primeiro nome</Info>
        <User>Gabriel</User>
        <Info>Segundo nome</Info>
        <User>Poyer</User>
        <Info>Data de nascimento</Info>
        <User>20-12-1990</User>
        <Button>
          <Sair>Sair</Sair>
          <Icon><SignOut color='#465EFF' /></Icon>
        </Button>
      </Container>
    </>
  );
}
