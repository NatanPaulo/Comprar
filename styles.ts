// 3º Estilização: Externo
import { StyleSheet } from "react-native";

/*
Agora que dedicamos os estilos em arquivo separado. 
É necessário utilizar o "export" para compartilhar com outros arquivos
*/
export const styles = StyleSheet.create({
  // Propriedades que tem valor "string", precisam utilizar aspas
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "900",
    color: "red",
  },
});
