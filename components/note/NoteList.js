import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NoteItem from "./NoteItem";

const NoteList = props => {
    const [notes, setNotes] = useState([]);

    const addNoteHandler = (note) => {
        setNotes(currentNotes => [...currentNotes, {
            createdAt: Date.now(),
            value: note
        }]);
    };

    return (
        <FlatList
            data={notes}
            keyExtractor={item => item.createdAt.toString()}
            renderItem={({item}) => <NoteItem value={item.value}/>}/>
    )
};

export default NoteList;

const styles = StyleSheet.create({
    item: {
        marginVertical: 5,
        backgroundColor: "rgba(1, 1, 1, .03)",
        padding: 10
    }
});