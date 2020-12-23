import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/RootStackParamList';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Workouts')} style={{ height: 150, margin: 20, padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Workouts</Text>
            <Icon style={{ fontSize: 40, fontWeight: 'bold' }} name="angle-right" size={30} color="black" />
        </TouchableOpacity>
    </View>
)

export default Home;