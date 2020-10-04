import { StyleSheet } from 'react-native';
import { AppColors } from '../../config/colors';

export default StyleSheet.create({
    contactContainer:{
        backgroundColor: '#fff',
        flex: 1
    },
    searchInput: {
        fontSize: 18,
        padding: 16,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    itemContainer:{
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center'
    },
    avatar:{
        width: 50,
        height: 50,
        backgroundColor: AppColors.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarLabel:{
        fontSize: 24,
        color: "#fff"
    },
    name: {
        fontSize: 18,
        marginLeft: 12
    }
})