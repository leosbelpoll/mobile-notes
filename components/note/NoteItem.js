import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NoteItem = props => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={() => {
            Alert.alert(
                'Note',
                props.value,
                [
                    {text: 'Delete', onPress: () => props.onNoteRemoved(props.createdAt)},
                ]
            )
        }}>
            <View style={styles.item}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default NoteItem;

const styles = StyleSheet.create({
    item: {
        marginVertical: 5,
        backgroundColor: "rgba(1, 1, 1, .03)",
        padding: 10
    }
});