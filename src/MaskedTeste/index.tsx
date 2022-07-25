import { StyleSheet } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';

export default function TelaMascara() {
  return (
    <MaskedTextInput
      type="currency"
      options={{
        prefix: '$',
        decimalSeparator: '.',
        groupSeparator: ',',
        precision: 2,
      }}
      onChangeText={(text, rawText) => {
        console.log(text);
        console.log(rawText);
      }}
      style={styles.input}
      keyboardType="numeric"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
