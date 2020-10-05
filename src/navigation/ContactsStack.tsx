import React from 'react';
import { createStackNavigator, StackNavigationProp, TransitionPresets } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

//Screens
import Contacts from '../containers/Contacts';
import ContactDetails from '../containers/Contacts/ContactDetails';

//Custom parameter definition
type ContactsParamList = {
    Contacts: undefined;
    ContactDetails: IContactDetails;
};

//Stack Navigation Props
export type ContactsNavigationProp = StackNavigationProp<ContactsParamList, 'Contacts'>;

//Route Props
export type ContactsRouteProp = RouteProp<ContactsParamList, 'Contacts'>;

const Stack = createStackNavigator<ContactsParamList>();

export function ContactsStack() {
    return (
        <Stack.Navigator 
            initialRouteName="Contacts"
            headerMode="float"
        >
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen  
                name="ContactDetails" 
                component={ContactDetails} 
                options={{ 
                    title: 'Contact Details', 
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Stack.Navigator>
    );
}
