import {
  Info,
  HeaderContainer,
  Walcome,
  Report,
} from '../home/style';
import { Image } from 'react-native';

export function Header({report, walcome}: {report: string, walcome?: string}) {
  return(
    <>
      <HeaderContainer>
          <Image source={require('../../imagens/logo.png')} />
          <Info>Cidadão informa</Info>
          <Walcome>{walcome}</Walcome>
          <Report>{report}</Report>
      </HeaderContainer>
    </>
  )
}
