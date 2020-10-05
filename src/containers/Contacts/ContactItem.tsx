import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getNameAvatar } from '../../utils/common';
import { ContactsNavigationProp } from '../../navigation/ContactsStack';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const ContactItem = ({ details }: { details: IContactDetails }) => {
    const navigation = useNavigation<ContactsNavigationProp>();

    return(
        <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={()=>navigation.navigate('ContactDetails', details)}
        >
            <View style={styles.avatar}>
                <Text style={styles.avatarLabel}>{getNameAvatar(details.name)}</Text>
            </View>
            <Text style={styles.name}>{details.name}</Text>
        </TouchableOpacity>
    )
};

export default ContactItem;
