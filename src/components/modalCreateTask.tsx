import { View, Text, TextInput, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

// import { Container } from './styles';

export default function ModalCreateTask() {
  return (
    <View className='bg-[rgba(24, 24, 24, 0.6)] flex-1 items-center justify-center'>
      <View className='bg-custom-black-secundary w-full py-6 px-4'>
        <Text className='text-custom-white text-left text-lg'>Adicionar Tarefa</Text>
        <TextInput 
          placeholder='Descrição da tarefa'
          className='placeholder-custom-white max-h-20'
          placeholderTextColor='#fafafa'
          autoFocus
          multiline
        />
        <View>
        <Pressable>
          <Icon name="home" size={18} color="#999" />
        </Pressable>
        </View>
      </View>
      
    </View>
  );
}
