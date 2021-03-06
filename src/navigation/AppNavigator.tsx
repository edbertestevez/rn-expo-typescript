import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppColors } from '../config/colors';

//Screens
import { ContactsStack } from './ContactsStack';
import { SettingsStack } from './SettingsStack';


const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch(route.name){
                    case 'Contacts':{
                        iconName = focused ? 'contact-phone' : 'contact-phone-outline';
                        break;
                    }
                    case 'Settings':{
                        iconName = focused ? 'settings' : 'settings-outline';
                        break;
                    }
                    default:{
                        iconName = "";
                    }
                }

                return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: AppColors.primary,
            inactiveTintColor: 'gray',
            labelStyle: {fontSize: 14},
            style:{height: 60, paddingBottom: 4}
        }}
    >
      <Tab.Screen name="Contacts" component={ContactsStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default AppNavigator;