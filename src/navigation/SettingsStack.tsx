import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

//Screens
import Settings from '../containers/Settings';

//Custom parameter definition
type SettingsParamList = {
    Settings: undefined;
};

//Stack Navigation Props
export type SettingssNavigationProp = StackNavigationProp<SettingsParamList, 'Settings'>;

//Route Props
export type SettingsRouteProp = RouteProp<SettingsParamList, 'Settings'>;

const Stack = createStackNavigator();

export function SettingsStack() {
    return (
        <Stack.Navigator 
            initialRouteName="Settings"
            headerMode="float"
            mode="card"
        >
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}