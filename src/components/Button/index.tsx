import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

// Typescript para manter consistente nosso codigo:
type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
