import { View, Text, TextInput, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ModalCreateTaskType } from "../screens/modalCreateTask";

// import { Container } from './styles';

export default function ModalCreateTask({ handleClose }: ModalCreateTaskType) {
  return (
    <View className="bg-custom-fade flex-1 items-center justify-end">
      <View className="bg-custom-black-secundary w-full py-6 px-4 h-52">
        <Text className="text-custom-white text-left text-lg">
          Adicionar Tarefa
        </Text>
        <TextInput
          placeholder="Descrição da tarefa"
          className="placeholder-custom-white max-h-20"
          placeholderTextColor="#fafafa"
          autoFocus
          multiline
        />
        <View className='flex-row justify-around items-center w-full py-10'>
          <Pressable
            className=' text-custom-purple'
            onPress={handleClose}
          >
            <Text className='text-custom-purple text-xl'>Cancel</Text>
          </Pressable>
          <Pressable className='bg-custom-purple px-2 py-3 w-28 items-center rounded'>
            <Text className='text-custom-white text-xl'>Criar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
