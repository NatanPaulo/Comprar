3 Tipos de estilização em React Native:
Propriedades que tem valor "string", precisam utilizar aspas

1º Estilização: Inline
Se utiliza no App.tsx
<!-- 
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={styles.text}>Hello World!</Text>
</View> 
-->


2º Estilização: Interno
Se utiliza no App.tsx
<!-- 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "900",
    color: "blue",
  },
});
  -->



3º Estilização: Externo
Se utiliza no style.ts
<!-- import { StyleSheet } from "react-native"; -->
Agora que dedicamos os estilos em arquivo separado. 
É necessário utilizar o "export" para compartilhar com outros arquivos
<!-- 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "900",
    color: "blue",
  },
}); -->