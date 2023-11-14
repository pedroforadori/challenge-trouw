import React from "react";
import { Pressable, View, Text } from "react-native";
import { ButtonType } from "../type/button";

export default function ButtonPlus({children, handleTask} : ButtonType) {
  return (
    <View className='bg-custom-purple rounded-full text-2xl'>
      <Pressable onPress={handleTask}>
        <Text className='text-custom-white text-4xl p-5 px-7'>{children}</Text>
      </Pressable>
    </View>
  );
}
