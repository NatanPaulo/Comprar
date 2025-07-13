Executar local: npx expo start 
Executar externo: npx expo start --tunnel

1º regra: Componentes devem iniciar em MAIÚSCULO
<!-- import { View, Text } from "react-native"; -->

2º regra: Um componente pode retornar um único elemento pai(Indentação):
export default function App() {
  return (
     1º Estilização: Inline
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

    Os "View" é como se fossem as "Div" em HTML
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}