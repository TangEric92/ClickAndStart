import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "../constants/Styles";

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
    <View style={styles.containerAuth}>
      <Text style={styles.logo}> MyProj </Text>
      <TextInput
        style={styles.border}
        // value={}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="Email"
      />
      <TextInput
        style={styles.border}
        // value={}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.border}
        // value={}
        onChangeText={text => {
          setUsername(text);
        }}
        placeholder="Username"
      />
      <TextInput
        style={styles.border}
        // value={}
        onChangeText={text => {
          setBio(text);
        }}
        placeholder="Bio"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
