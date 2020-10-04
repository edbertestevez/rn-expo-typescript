import React from 'react';
import { View, Text} from 'react-native';
import { getNameAvatar } from '../../utils/common';
import styles from './styles';

const ContactItem = ({name}: {name: string}) => (
    <View style={styles.itemContainer}>
        <View style={styles.avatar}>
            <Text style={styles.avatarLabel}>{getNameAvatar(name)}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
    </View>
  );

export default ContactItem;