import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import User from 'services/api/user';

const Profile = () => {
    const style = StyleSheet.create({
        container: {
            width: '90%',
            alignSelf: 'center',
        },
        settingField: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    });

    const [profile, setProfile] = useState<{
        first_name: string;
        last_name: string;
        email: string;
    }>({ first_name: '', last_name: '', email: '' });

    useEffect(() => {
        const fetchData = async () => {
            const data = await User.getProfile();
            setProfile(data);
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <View style={style.settingField}>
                <Text>Nom</Text>
                <Text>{profile.first_name}</Text>
            </View>
            <View style={style.settingField}>
                <Text>Prénom</Text>
                <Text>{profile.last_name}</Text>
            </View>
            <View style={style.settingField}>
                <Text>Email</Text>
                <Text>{profile.email}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
