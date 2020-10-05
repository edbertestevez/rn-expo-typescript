import React, {useState, useEffect} from 'react';
import { View, TextInput, FlatList } from 'react-native';
import ContactItem from './ContactItem';
import styles from './styles';

//Dummy display
import dummyList from '../../../dummy.json';

const Contacts: React.FC = () =>{
    const [search, setSearch] = useState<string>("");
    const [contactList, setContactList] = useState<IContactDetails[] | null>(null);
    
    const renderItem = ({ item }: {item: IContactDetails}) => <ContactItem details={item} />;
    
    const filterSearch = (text: string) =>{
        let filtered = dummyList?.filter(c => (c.name.toLowerCase()).match(text.toLowerCase()));
        setSearch(text);
        setContactList(filtered || []);
    }

    useEffect(()=>{
        setContactList(dummyList)
    }, [])

    return (
        <View style={styles.contactContainer}>
            <TextInput 
                value={search}
                placeholder="Search Contacts"
                onChangeText={(text: string) => filterSearch(text)}
                style={styles.searchInput}
            />
            
            <FlatList
                data={contactList} 
                renderItem={renderItem} 
                keyExtractor={item => item.id}
            />
        </View>

    );
};

export default Contacts;