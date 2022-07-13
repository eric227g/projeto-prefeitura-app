import { Container, TextFonte, LogButtonEnvio, TextEnvio, TextFieldCampo, RatingStar } from './style';
import { Rating } from 'react-native-ratings';
import { ReactComponent as wallet } from '../../../img/Wallet.jpg';
import { ReactComponent as homepage } from '../../../img/Homepage.jpg';

export default function ScreenSugestao() {
  return (
    <Container>
      <TextFonte>Avaliação do aplicativo</TextFonte>
      <RatingStar>
        <Rating type="star" ratingBackgroundColor="red" tintColor="#f6f6f6" ratingCount={5} imageSize={20} showRating />
      </RatingStar>
      <TextFonte>Avaliação da prefeitura em geral</TextFonte>
      <RatingStar>
        <Rating type="star" ratingBackgroundColor="red" tintColor="#f6f6f6" ratingCount={5} imageSize={20} showRating />
      </RatingStar>
      <TextFonte>Escreva sua sugestão para prefeitura</TextFonte>
      <TextFieldCampo placeholder="Colocar um componente de campo de texto" />
      <LogButtonEnvio>
        <TextEnvio>Enviar</TextEnvio>
      </LogButtonEnvio>
    </Container>
  );
}
