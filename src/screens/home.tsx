import { StatusBar } from "expo-status-bar";
import { Image, Pressable, Text, View, Modal } from "react-native";
import ButtonPlus from "../components/buttonPlus";
import { useState } from "react";
import ModalCreateTask from "../components/modalCreateTask";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleTask() {
    setModalVisible(true)
  }
  return (
    <View className="flex-1 items-center justify-around bg-custom-black">
      <View className="gap-3">
        <Image source={require("../../assets/no-task.png")} className="" />
        <Text className="text-custom-white text-2xl font-bold">
          O que você vai fazer hoje?
        </Text>
        <Text className="text-custom-white">
          Clique em + para adicionar suas tarefas
        </Text>
      </View>
      <ButtonPlus handleTask={handleTask}>+</ButtonPlus>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalCreateTask />
      </Modal>
    </View>
  );
}
