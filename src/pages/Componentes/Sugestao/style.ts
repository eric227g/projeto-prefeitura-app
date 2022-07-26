import styled, { css } from 'styled-components/native';

export const RatingStar = styled.Text`
  color: #3498db;
  background-color: transparent;
  margin-left: 12px;
  text-align: left;
`;

export const TextFonte = styled.Text`
  font-size: 14px;
  padding-left: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  display: flex;
  margin-top: 250px;
  padding-left: 26px;
  justify-content: center;
`;

export const TextFieldCampo = styled.TextInput`
  width: 350px;
  height: 200px;
  background-color: #e5e5e5;
`;

export const LogButtonEnvio = styled.TouchableOpacity`
  background-color: blue;
  width: 100px;
  height: 40px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 70px;
  margin-bottom: 40px;
`;

export const TextEnvio = styled.Text`
  font-size: 16px;
  color: #ffff;
  justify-content: center;
  text-align: center;
`;
export const ViewHead = styled.View`
  display: flex;
`;

export const ViewContainerSugestao = styled.View`
  display: flex;
  flex: 1;
  justify-content: 'center';
  justify-content: space-between;
  max-width: 100%;
  margin-top: 120px;
`;

export default styled;
