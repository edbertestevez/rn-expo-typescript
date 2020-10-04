import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight
	}
});

registerRootComponent(App);
