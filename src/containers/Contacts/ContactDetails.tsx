import React from 'react';
import { View, Text } from 'react-native';
import { ContactsRouteProp } from '../../navigation/ContactsStack';
import { useRoute } from '@react-navigation/native';

const ContactDetails: React.FC<ContactsRouteProp>  = () => {
    const route = useRoute<ContactsRouteProp>();
    const params: IContactDetails = route.params || {id: "", name: "", contactNumber: ""};
    
    //TO BE CONTINUED for form inputs and validations (Add/Update)
    //Use Formik and Yup with typescript
    //Use conditional hooks logic for insert and update
    //Add color data for customization of avatar color

    return (
        <View>
            <Text>{params.id}</Text>
            <Text>{params.name}</Text>
            <Text>{params.contactNumber}</Text>
        </View>
    );
};

export default ContactDetails;