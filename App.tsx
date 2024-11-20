import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import HomeScreen from './src/screens/HomeScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName:any;

            if (route.name === 'Home') iconName = 'home';
            if (route.name === 'Projetos') iconName = 'work';
            if (route.name === 'Sobre') iconName = 'person';
            if (route.name === 'Contato') iconName = 'contact-page';

            return <MaterialIcons name={iconName} size={20} color="#333" />;
          },
          tabBarActiveTintColor: '#0E71CD',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Projetos" component={ProjectsScreen} />
        <Tab.Screen name="Sobre" component={AboutScreen} />
        <Tab.Screen name="Contato" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
