import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
//OPCIONAL: import { AntDesign, MaterialIcons } from "@expo/vector-icons"; //https://icons.expo.fyi/Index
//Instalar nova biblioteca de ícones: npx expo install react-native-svg lucide-react-native
import { CircleCheck } from "lucide-react-native"; // https://lucide.dev/

type Props = TouchableOpacityProps & {
  status: FilterStatus; // Status do filtro (pendente ou comprado)
  isActive: boolean; // Indica se o filtro está ativo
};

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
      {...rest}
    >
      {/* <AntDesign name="home" size={18} />
      <MaterialIcons name="shopping-cart" size={18} /> */}
      <CircleCheck size={18} color={isActive ? "#4CAF50" : "#9E9E9E"} />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
