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

import { useState } from 'react'

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
    //Criar uma nova lista de tarefas atualizada, onde a tarefa com o id corresponde tem seu estado de conclusão invertido
    const listaAtualizada = tarefas.map(item => {

      if (item.id === id) {
        return {
          ...item,
          concluida: !item.concluida
        }
      }
      return item
    })
  }

  function excluirTarefa(id){
    //Criar uma nova lista de tarefas atualizada,
    //onde a tarefa com o id correspondente é removida
    const listaAtualizada = tarefas.filter(
      item => item.id !== id
    )
    //Atualizar a nova lista de tarefas
    setTarefas(listaAtualizada)
  }

  // Renderizar a interface do aplicativo 
  return (

    <View style={style.container}>

      <Text style={style.titulo}>
        Gerenciador de Tarefas
      </Text>

      <Text style={style.label}>
        Digite uma tarefa que deseja adicionar a lista.
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite uma tarefa'
        value={tarefa}
        onChangeText={setTarefa}
      />

      {/* Botão para adicionar tarefa */}
      <Pressable
        style={style.botao}
        onPress={adicionarTarefa}
      >
        <Text style={styles.textoBotao}>
          Adicionar
        </Text>
      </Pressable>

      <Text>
        Total de Tarefas: {tarefas.length}
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <View style={styles.item}>

            <Pressable
              onPress={() => concluirTarefa(item.id)}
            >
              <Text
                style={[
                  styles.nome,
                  item.concluida && styles.concluida
                ]}
              >
                {item.nome}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => excluirTarefa(item.id)}
            >
              <Text style={style.excluir}>
                X
              </Text>
            </Pressable>

          </View>

        )}
      />

    </View>

  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
    backgroundColor: '#F5F5F5'
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#0dd57e',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold'
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10
  },

  nome: {
    fontSize: 18
  },

  concluida: {
    textDecorationLine: 'line-through',
    color: '#999'
  },

  excluir: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18
  },

  label: {
    fontSize: 18,
    marginBottom: 10
  }

})