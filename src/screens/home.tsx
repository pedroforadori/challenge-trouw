import {
  Image,
  Text,
  View,
  Modal,
  FlatList,
  SafeAreaView,
  ListRenderItemInfo,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import ButtonPlus from "../components/buttonPlus";
import { useEffect, useState } from "react";
import ModalCreateTask from "../components/modalCreateTask";
import useFetch from "../hooks/useFetch";
import { TaskType } from "../type/task";
import CardTask from "../components/cardTask";
import { api } from "../api";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const { data: task, isFetching } = useFetch<TaskType[]>("/todolist");
  const taskFilter = task?.filter((item) => item.deleted === false)

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
      <StatusBar
        animated={true}
        barStyle={"light-content"}
      />
      {isFetching && <ActivityIndicator size="large" />}
      {taskFilter ? (
        <SafeAreaView className="h-[85%] w-11/12 mt-10">
          <FlatList
            data={taskFilter.reverse()}
            renderItem={renderItem}
            keyExtractor={(item) => item.list_id}
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
