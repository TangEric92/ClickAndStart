import React, { useState } from "react";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { Theme } from "../../constants/Constants";

import styles from "./Authentication";
//--- Import navigation
import { useNavigation } from "@react-navigation/core";

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //LOGIN EMAIL
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  //-- Return
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Entypo name="tools" size={100} color="white" />
        <Text style={styles.welcome}>{Theme.AppName}</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardWrapper}>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="email"
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="password"
          secureTextEntry
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
        {/* SIGNUP */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonTitle}>SignUp</Text>
        </TouchableOpacity>

        <Text style={{ color: "white" }}>Pas encore de compte ? </Text>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;
