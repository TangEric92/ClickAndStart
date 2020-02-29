import React, { useState } from "react";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import styles from "./Authentication";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

import { Theme } from "../../constants/Constants";
//--- Import navigation
import { useNavigation } from "@react-navigation/core";

function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  //--- Function
  const handleSignUp = () => {
    navigation.navigate("Home");
  };
  //-- return
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Entypo name="tools" size={100} color="white" />
        <Text style={styles.welcome}>{Theme.AppName}</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardWrapper}>
        <TextInput
          style={styles.input}
          // value={}
          onChangeText={text => {
            setEmail(text);
          }}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          // value={}
          onChangeText={text => {
            setPassword(text);
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          // value={}
          onChangeText={text => {
            setUsername(text);
          }}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          // value={}
          onChangeText={text => {
            setBio(text);
          }}
          placeholder="Bio"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonTitle}>Sign up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Signup;
