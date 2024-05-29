import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Tela1 from './tela1';
import Tela2 from './tela2';
import Tela3 from './tela3';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {
    const [info1, setInfo1] = useState('');
    const [info2, setInfo2] = useState('');

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: "#cd0",
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    bottom: 30,
                    right: 30,
                    left: 30,
                    borderRadius: 5,
                    backgroundColor: "#cfa",
                },
            }}
        >
            <Tab.Screen
                name="tela1"
                options={{
                    tabBarBadge: 1,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons size={focused ? 25 : 20} color={"#000"} name={focused ? "home" : "home-outline"} />
                    ),
                }}
            >
                {() => <Tela1 textoPronto={setInfo1} textoPronto2={setInfo2} />}
            </Tab.Screen>
            <Tab.Screen
                name="tela2"
                component={Tela2}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons size={focused ? 25 : 20} color={"#000"} name={focused ? "lock-closed" : "lock-closed-outline"} />
                    ),
                }}
            />
            <Tab.Screen
                name="tela3"
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons size={focused ? 25 : 20} color={"#000"} name={focused ? "watch" : "watch-outline"} />
                    ),
                }}
            >
                {() => <Tela3 texto={info1} texto2={info2} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
