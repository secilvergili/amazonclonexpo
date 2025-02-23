import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const Header = () => {
  return (
    <LinearGradient
    style={styles.container}
    colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
    start={{ x: 0.0, y: 0.25 }}
    end={{ x: 0.5, y: 1.0 }}
    >
      <View style={styles.inputBox}> 
        <View styles={styles.row}> 
          <Ionicons name="search" size={24} color="black" />
          <TextInput
          placeholder="Search Amazon"
          placeholderTextColor={"#848484"}
          style={styles.textInput}
          />


        </View>
        <AntDesign  name="scan1" size={24} color="black" />
      </View>
      <Entypo name="mic" size={24} color="black" />

    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({

});