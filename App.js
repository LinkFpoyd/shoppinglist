import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);


  function lisaa(){
    setList([...list, {key: text}])
  }

  function clear(){
    setText('')
  }

  function clearAll(){
    setList([])
    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} textAlign={'center'} onChangeText={input => setText(input)} value={text}/>
      <View style={styles.button}>
        <Button onPress={lisaa} title='Add to list'/>
        <Button onPress={clear} title='Clear input'/>
        <Button onPress={clearAll} title='Clear all'/>
      </View>
      <Text style={styles.text}>Shopping List:</Text>
      <FlatList 
        data={list}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    marginBottom: 2,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    margin: 20,
  }
});
