import React from 'react';
import { Text, View } from 'react-native';

export default function indexItem({ data }) {

    return (
        <View>
            <Text>{`Tên : ${data.setAddTen}`}</Text>
            <Text>{`Tuổi: ${data.addAge}`}</Text>
        </View>
    );
}
