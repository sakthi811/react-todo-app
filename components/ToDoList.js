import React, {useState} from 'react';
import {StyleSheet, View, Text,TextInput, Button, ScrollView} from 'react-native';
import ToDo from './ToDo';

export default function ToDoList() {

    const [title, setTitle] = useState('TodoList')
    const [text, setText] = useState('');
    const [list, setList] = useState(['Hello World!'])

    function addItem() {
        const updatedlist = list
        updatedlist.push(text)
        setList(updatedlist)
        setText('')
    }

    function deleteItem(index) {
        const updatedList = list.filter((todo) => todo!= index)
        setList(updatedList)
    }

    return(
        <View style={{width: '80%', marginBottom: 60, marginTop:60}}>
            <Text style={[style.align, style.font]}>{title }</Text>
            <ScrollView>
                {
                list.map((x, index)=> 
                    <ToDo key={index} item={x} index={index} delete={deleteItem}/>
                )}
            </ScrollView>
            <View>
                <TextInput 
                    style={style.input}
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
                <Button title='Add item' onPress= {()=> addItem()} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    align: {
        alignSelf: 'center'
    }, 
    font: {
        fontSize: 20
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8,
        padding: 8
    }
})
