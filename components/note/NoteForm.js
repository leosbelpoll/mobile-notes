import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

import Colors from '../../constants/colors';

const NoteForm = props => {
    const [currentNote, setCurrentNote] = useState("");

    const noteInputHandler = (text) => {
        setCurrentNote(text);
    };

    const addNoteHandler = () => {
        props.onNoteAdded(currentNote);
        setCurrentNote("");
    }

    const cancelNoteHandler = () => {
        props.onNoteCanceled();
        setCurrentNote("");
    }

    return (
        <Modal visible={props.isAdding} animationType="slide">
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Write your note"
                    style={styles.input}
                    onChangeText={noteInputHandler}
                    value={currentNote} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={cancelNoteHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={addNoteHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default NoteForm;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: 5,
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        width: "40%"
    }
});