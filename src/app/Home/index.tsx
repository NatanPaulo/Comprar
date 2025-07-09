// Executar local: npx expo start
// Executar externo: npx expo start --tunnel

import { View, Text } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}
