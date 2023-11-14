import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  Text,
  View,
  Modal,
  ScrollView,
  FlatList,
  SafeAreaView,
  Touchable,
  ListRenderItemInfo,
  ActivityIndicator,
} from "react-native";
import ButtonPlus from "../components/buttonPlus";
import { useState } from "react";
import ModalCreateTask from "../components/modalCreateTask";
import useFetch from "../hooks/useFetch";
import { TaskType } from "../type/task";
import CardTask from "../components/cardTask";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const { data: tasks, isFetching } = useFetch<TaskType[]>("/todolist");

  function handleTask() {
    setModalVisible(true);
  }

  function handleClose() {
    setModalVisible(false);
  }

  function renderItem({ item }: ListRenderItemInfo<TaskType>) {
    return <CardTask {...item} />;
  }

  return (
    <View className="flex-1 items-center justify-around bg-custom-black">
      {isFetching && <ActivityIndicator size="large"/>}
      {tasks ? (
        <SafeAreaView className="h-[80%] w-11/12 mt-10">
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.listId}
          />
        </SafeAreaView>
      ) : (
        <View className="gap-3">
          <Image source={require("../../assets/no-task.png")} />
          <Text className="text-custom-white text-2xl font-bold">
            O que você vai fazer hoje?
          </Text>
          <Text className="text-custom-white">
            Clique em + para adicionar suas tarefas
          </Text>
        </View>
      )}

      <ButtonPlus handleTask={handleTask}>+</ButtonPlus>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalCreateTask handleClose={handleClose} />
      </Modal>
    </View>
  );
}
