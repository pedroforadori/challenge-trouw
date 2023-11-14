import { View, Text, ScrollView } from "react-native";
import { TaskType } from "../type/task";

export default function CardTask({
  title,
  description,
  listId,
  status,
}: TaskType) {
  return (
    <ScrollView className="mt-4 p-4 bg-custom-black-secundary rounded" key={listId}>
      <Text className="text-custom-white font-bold">{title}</Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-custom-white">{description}</Text>
        {status === "CONCLUIDO" ? (
          <Text className="text-custom-white bg-[#66CC41] p-2 rounded">
            {status}
          </Text>
        ) : (
          <Text className="text-custom-white bg-[#FFCC80] p-2 rounded">
            {status}
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
