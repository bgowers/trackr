import { StackNavigationProp } from '@react-navigation/stack';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from '../../routes/RootStackParamList';

type WorkoutsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Workouts'
>;

type Props = {
    navigation: WorkoutsScreenNavigationProp;
}

const Workouts = ({ navigation }: Props) => (
    <View>
        <TouchableOpacity style={{ height: 100, margin: 5, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Workout 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 100, margin: 5, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Workout 2</Text>
        </TouchableOpacity>
    </View>
);

export default Workouts;