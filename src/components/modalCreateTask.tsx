import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ModalCreateTaskType } from "../screens/modalCreateTask";

// import { Container } from './styles';

export default function ModalCreateTask({ handleClose }: ModalCreateTaskType) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='bg-custom-fade flex-1 items-center justify-end'
    >
        <View className="bg-custom-black-secundary w-full py-6 px-4 h-52">
          <Text className="text-custom-white text-left text-lg">
            Adicionar Tarefa
          </Text>
          <TextInput
            placeholder="Descrição da tarefa"
            className="placeholder-custom-white max-h-10"
            placeholderTextColor="#fafafa"
            autoFocus
            multiline
          />
          <View className="flex-row justify-around items-center w-full py-10">
            <Pressable className=" text-custom-purple" onPress={handleClose}>
              <Text className="text-custom-purple text-xl">Cancel</Text>
            </Pressable>
            <Pressable className="bg-custom-purple px-2 py-3 w-28 items-center rounded">
              <Text className="text-custom-white text-xl">Criar</Text>
            </Pressable>
          </View>
        </View>
    </KeyboardAvoidingView>
  );
}
