import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
//OPCIONAL: import { AntDesign, MaterialIcons } from "@expo/vector-icons"; //https://icons.expo.fyi/Index
import { StatusIcon } from "../StatusIcon";

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
      <StatusIcon status={status} />
      {/* <AntDesign name="home" size={18} />
      <MaterialIcons name="shopping-cart" size={18} /> */}
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
