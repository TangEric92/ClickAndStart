import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "../constants/Styles";
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
    <View style={styles.containerAuth}>
      <Text style={styles.logo}> </Text>
      <TextInput
        style={styles.border}
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="Email"
      />
      <TextInput
        style={styles.border}
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
      {/* LOGIN EMAIL */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
      {/* SIGNUP */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>Créer un compte</Text>
      </TouchableOpacity>
      <Text>Pas encore de compte ? </Text>
    </View>
  );
}
export default Login;
