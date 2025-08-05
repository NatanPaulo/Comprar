// Executar local: npx expo start
// Executar externo: npx expo start --tunnel

import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive></Filter>
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* mostrei como ativar a rolagem utilizando a ScrollView, que é útil para
          exibir elementos que não cabem na tela. Para listas maiores, mencionei
          que a FlatList é a melhor prática, que abordaremos na próxima aula. */}
          {Array.from({ length: 100 }).map((value, index) => (
            <Item
              key={index}
              data={{ status: FilterStatus.DONE, description: "Café" }}
              onStatus={() => console.log("mudar status")}
              onRemove={() => console.log("remover")}
            ></Item>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
