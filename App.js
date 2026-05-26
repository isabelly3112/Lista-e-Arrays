import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//--------------------------------------------------------------------------------------------------------------

import {useState} from 'react'

import {
  View, 
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet
} from 'react-native'

// Gerenciador de tarefas 
export default function App() {

  // Estados para a tarefa e para a lista de tarefas 
  const [tarefa, setTarefa] = useState('') // Para o objeto
  const [tarefas, setTarefas] = useState([]) // Para a lista de tarefas 

  function adicionarTarefa() {
    
    //Verifica se o campo da tarefa está vazio
    if (tarefa === '') {
      return
    }

    //Criar um novo objeto de tarefa
    const novaTarefa = {
      id: Date.now(),
      nome: tarefa,
      concluida: false
    }

    setTarefas([...tarefas, novaTarefa])

    setTarefa('')
  }

  function concluirTarefa(id) {

  }
}
