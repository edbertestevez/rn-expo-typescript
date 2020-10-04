import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export interface Props {
    title: string,
    height?: number
}

const AppHeader: React.FC<Props> = ({title, height}) =>{
    return(
        <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        
        <StatusBar style="dark" />
      </View>
    )
}

export default AppHeader;