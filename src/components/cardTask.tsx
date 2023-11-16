import { View, Text, ScrollView, Pressable } from "react-native";
import { TaskType } from "../type/task";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../type/routes";

export default function CardTask({
  title,
  description,
  list_id,
  status,
}: TaskType) {
  const navigation = useNavigation<NavigationType>();
  return (
    <Pressable
      className="mt-4 p-4 bg-custom-black-secundary rounded"
      key={list_id}
      onPress={() =>
        navigation.navigate("editTask", {
          titleParam: title,
          descriptionParam: description,
          listIdParam: list_id,
          statusParam: status,
        })
      }
    >
      <Text className="text-custom-white font-bold">{title}</Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-custom-white w-3/5">{description}</Text>
        {status === "CONCLUIDO" && (
          <Text className="text-custom-white bg-[#66CC41] p-2 rounded">
            {status}
          </Text>
        )}
        {status === "PENDENTE" && (
          <Text className="text-custom-white bg-[#a48250] p-2 rounded">
            {status}
          </Text>
        )}
        {status === "EM ANDAMENTO" && (
          <Text className="text-custom-white bg-[#808dff] p-2 rounded">
            {status}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
