import styled from 'styled-components/native';

export const Info = styled.Text`
  color: white;
  margin-left: 100px;
  margin-top: 60px;
  font-size: 24px;
  font-weight: 600;
  width: 200px;
  height: 50px;
  flex: 1;
`;
export const Walcome = styled.Text`
  color: white;
  margin-left: 100px;
  margin-top: 22px;
  font-size: 24px;
  font-weight: 600;
  width: 207px;
  height: 50px;
  flex: 1;
`;
export const Report = styled.Text`
  color: white;
  margin-left: 70px;
  margin-top: 30px;
  font-size: 24px;
  font-weight: 600;
  width: 240px;
  height: 60px;
  margin-bottom: 20px;
  justify-content: center;
  flex: 1;
`;
export const HeaderContainer = styled.View`
  width: 100%;
  height: 200px;
  background-color: #2b47fc;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Manut_Vias = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 110px;
`;
export const Manut_Parque = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: -140px;
  width: 150px;
  flex-direction: column;
`;
export const Energia = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 110px;
`;
export const Anvisa = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: -140px;
  width: 150px;
  flex-direction: column;
`;
export const Ideia = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: -140px;
  width: 150px;
  flex-direction: column;
`;
export const Water = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 110px;
`;
export const Sugestao = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;
export const StyleText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  margin-left: 15px;
  width: 150px;
`;
export const StyleTextLeft = styled.Text`
  font-size: 15px;
  font-weight: 700;
  width: 113px;
`;

export const ImageHome = styled.Image`
  width: 100px;
  height: 100px;
`;
export const ImageLogo = styled.Image`
  width: 155px;
  height: 143px;
  position: absolute;
`;
export const ViewContainer = styled.View`
  display: flex;
  justify-content: 'center';
  align-items: center;
`;
export const ViewButtons = styled.View`
  width: 100%;
  max-width: 600px;
  min-width: 400px;
  margin-left: 55px;
  padding-right: 60px;
  padding-left: 15px
`;

export default styled;
