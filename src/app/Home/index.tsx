// Executar local: npx expo start
// Executar externo: npx expo start --tunnel

import { View, Image } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
    </View>
  );
}
