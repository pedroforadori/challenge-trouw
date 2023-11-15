import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { ModalCreateTaskType } from "../type/modalCreateTask";
import { useState } from "react";
import { api } from "../api";

export default function ModalCreateTask({ handleClose }: ModalCreateTaskType) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  function handleCreate() {
    const validate = {
      validateCountCaracterer: validateCountCaracterer(title, description),
    };
    
    if (validate["validateCountCaracterer"]) {
      setIsLoading(true);
      api
        .post("/todolist", {
          title: title,
          description: description,
          status: "PENDENTE",
        })
        .finally(() => {
          setIsLoading(false);
          handleClose();
        });
    } else {
      setError(true)
    }
  }

  function validateCountCaracterer(title: string, description: string) {
    return title.length >= 5 || description.length >= 5;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="bg-custom-fade flex-1 items-center justify-end"
    >
      <View className="bg-custom-black-secundary w-full px-4 gap-3">
        <Text className="text-custom-white text-left text-lg">
          Adicionar Tarefa
        </Text>
        <TextInput
          placeholder="Titulo da tarefa"
          className="placeholder-custom-white max-h-10"
          placeholderTextColor="#fafafa"
          autoFocus
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Descrição da tarefa"
          className="placeholder-custom-white max-h-10"
          placeholderTextColor="#fafafa"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        {error && <Text className="text-[#ae3636] text-xl">Texto muito curto.</Text>}
        <View className="flex-row justify-around items-center w-full py-10">
          <Pressable className=" text-custom-purple" onPress={handleClose}>
            <Text className="text-custom-purple text-xl">Cancel</Text>
          </Pressable>
          <Pressable
            className="bg-custom-purple px-2 py-3 w-28 items-center rounded"
            onPress={handleCreate}
          >
            <Text className="text-custom-white text-xl">
              Criar{" "}
              {isLoading && <ActivityIndicator className="text-custom-white" />}
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
