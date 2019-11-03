import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';

import NoteForm from './components/note/NoteForm';
import NoteItem from './components/note/NoteItem';

export default function App() {
    const [notes, setNotes] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

    const addNoteHandler = (note) => {
        setNotes(currentNotes => [...currentNotes, {
            createdAt: Date.now(),
            value: note
        }]);
        setIsAdding(false);
    }

    const removeNoteHandler = (createdAt) => {
        setNotes(currentNotes => currentNotes.filter(({createdAt: currentCreatedAt}) => currentCreatedAt != createdAt));
    }

    const cancelNoteHandler = () => {
        setIsAdding(false);
    }

    const showNoteForm = () => {
        setIsAdding(true);
    }

    return (
        <View style={styles.screen}>
            <Button
                style={styles.buttonShowNoteForm}
                onPress={showNoteForm}
                title="Add new note"/>
            <NoteForm
                onNoteAdded={addNoteHandler}
                onNoteCanceled={cancelNoteHandler}
                isAdding={isAdding}/>
            <FlatList
                style={styles.list}
                data={notes}
                keyExtractor={item => item.createdAt.toString()}
                renderItem={({item}) => <NoteItem {...item} onNoteRemoved={removeNoteHandler}/>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingVertical: 70,
        paddingHorizontal: 20
    },
    list: {
        marginTop: 20
    }
});