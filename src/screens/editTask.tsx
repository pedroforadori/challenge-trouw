import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  SafeAreaView,
  Image,
  TextInput,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import ButtonPrimary from "../components/buttonPrimary";
import { NavigationType, ParamsType } from "../type/routes";
import { api } from "../api";

export default function EditTask({ route }: ParamsType) {
  const { listIdParam, titleParam, descriptionParam, statusParam } =
    route.params;
  const [title, setTitle] = useState(titleParam);
  const [description, setDescription] = useState(descriptionParam);
  const [status, setStatus] = useState(statusParam);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);
  const navigation = useNavigation<NavigationType>();
  const options = [
    { label: "Em andamento", value: "EM ANDAMENTO" },
    { label: "Pendente", value: "PENDENTE" },
    { label: "Concluído", value: "CONCLUIDO" },
  ];

  function handleStatus(id: string, statusParam: string) {
    setIsLoadingStatus(true);
    console.log(id)
    api
      .patch(`todolist/${id}/status`, {
        status: statusSelect(statusParam)
      })
      .then(() => {
        setIsLoadingStatus(false);
        navigation.navigate("home");
      });
  }

  function statusSelect(statusParam: string){
    switch (statusParam) {
      case "EM ANDAMENTO":
        setStatus("EM ANDAMENTO")
        break;
      case "PENDENTE":
        setStatus("PENDENTE")
        break;
      case "CONCLUIDO":
        setStatus("CONCLUIDO")
        break;
    }
    return statusParam
  }

  function handleDelete(id: string) {
    setIsLoadingDelete(true);
    api.delete(`todolist/${id}`).then((response) => {
      setIsLoadingDelete(false);
      navigation.navigate("home");
    });
  }

  function handleEdit(id: string){
    setIsLoading(true);
    console.log(id)
    api
      .put(`todolist/${id}`, {
        title: title,
        description: description
      })
      .then((response) => {
        setIsLoading(false);
        navigation.navigate("home");
      });
  }

  return (
    <SafeAreaView className="flex-1 bg-custom-black">
      <View className="pt-16 px-7 gap-6">
        <Pressable
          className="text-custom-white"
          onPress={() => navigation.navigate("home")}
        >
          <Image source={require("../../assets/close.png")} />
        </Pressable>
        <TextInput
          className="text-custom-white text-xl"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          className="text-custom-white text-base"
          value={description}
          onChangeText={setDescription}
        />
        <View className="text-custom-white flex-row gap-3">
          {options.map((item) => (
            <Pressable onPress={() => handleStatus(listIdParam, item.value)}>
              <Text
                key={item.label}
                className={`text-custom-white ${
                  status === item.value
                    ? "bg-custom-purple"
                    : "bg-custom-black-secundary"
                } p-3`}
              >
                {item.label}
              </Text>
              
            </Pressable>
          ))}
          {isLoadingStatus && <ActivityIndicator className="text-custom-white" />}
        </View>
        <Pressable
          className="flex-row items-center gap-2"
          onPress={() => handleDelete(listIdParam)}
        >
          {isLoadingDelete && <ActivityIndicator className="text-custom-white" />}
          <Image
            source={require("../../assets/trash.png")}
            className="w-7 h-7"
          />
          <Text className="text-custom-red">Deletar Tarefa</Text>
        </Pressable>
        <View>
          <ButtonPrimary
            handleClick={() => handleEdit(listIdParam)}
            width="w-full"
            isLoading={isLoading}
          >
            {" "}
            Editar{" "}
          </ButtonPrimary>
        </View>
      </View>
    </SafeAreaView>
  );
}
