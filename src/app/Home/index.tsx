// Executar local: npx expo start
// Executar externo: npx expo start --tunnel

import { View, Image, ImageBackgroundComponent } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?" />
        <Button title="Entrar" />
      </View>
      <View style={styles.content}>
        <Filter status={FilterStatus.DONE} isActive={true} />
        <Filter status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
}
