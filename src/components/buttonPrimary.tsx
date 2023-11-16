import { ActivityIndicator, Pressable, Text } from "react-native";
import { ButtonPrimaryType } from "../type/buttonPrimary";

export default function ButtonPrimary({ isLoading, handleClick, children, width } : ButtonPrimaryType) {
  return (
    <Pressable
      className={`bg-custom-purple px-2 py-3 ${width} items-center rounded`}
      onPress={handleClick}
    >
      <Text className="text-custom-white text-xl">
        { children } {isLoading && <ActivityIndicator className="text-custom-white" />}
      </Text>
    </Pressable>
  );
}
