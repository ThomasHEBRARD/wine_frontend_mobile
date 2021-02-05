import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

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
    return (
        <SafeAreaView style={style.container}>
            <View style={style.settingField}>
                <Text>Nom</Text>
                <Text>HÉBRARD</Text>
            </View>
            <View style={style.settingField}>
                <Text>Prénom</Text>
                <Text>Thomas</Text>
            </View>
            <View style={style.settingField}>
                <Text>Email</Text>
                <Text>thomas.hebrard@gmail.com</Text>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
