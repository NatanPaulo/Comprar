import { FilterStatus } from "@/types/FilterStatus";
//Instalar nova biblioteca de ícones: npx expo install react-native-svg lucide-react-native
import { CircleDashed, CircleCheck } from "lucide-react-native";

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2c46b1" />
  ) : (
    <CircleDashed size={18} color="#000000" />
  );
}
