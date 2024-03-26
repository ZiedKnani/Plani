import React, { useState, useContext } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import UserAvatar from "react-native-user-avatar";
import Spinner from "react-native-loading-spinner-overlay";
import { Platform } from "react-native";

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.customButton, buttonStyle]}
    >
      <Text style={[styles.customButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = ({ navigation }) => {
  //const { email, password } = userInfo;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, isLoading, error } = useContext(AuthContext);

  const { setIsLoggedIn, setProfile } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // const [error, setError] = useState('');

  const image = {
    uri: "https://img.freepik.com/free-vector/abstract-shiny-grey-technology-background_1035-12620.jpg?w=740&t=st=1667419101~exp=1667419701~hmac=3bbdef34e890179fbe282cbbf64169f4f1d670dcc98086340713541f09d6ac23",
  };
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  /* const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 8)
      return updateError('Password is too short!', setError);

     return true;
 };*/

 return (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <Text style={styles.mainword}>Login</Text>
    <View>
      <Text style={styles.labelemail}>Email</Text>
      <TextInput
        style={styles.inputemail}
        value={email}
          label="Email"
          onChangeText={(text) => setEmail(text) && handleOnChangeText}
          placeholder="example@email.com"
          autoCapitalize="none"
      />
      <Text style={styles.labelpass}>Password</Text>
      <TextInput
        style={styles.inputpass}
        value={password}
        label="Password"
        onChangeText={(text) => setPassword(text) && handleOnChangeText}
        placeholder="********"
        autoCapitalize="none"
        secureTextEntry
      />
      <CustomButton
        title="Log In"
        onPress={() => {
          login(email, password);
        }}
        buttonStyle={{ marginTop: 30, borderRadius: 5 }}
        textStyle={{ fontSize: 20 }}
      />
    </View>
    <TouchableOpacity
      style={{ marginTop: 30, paddingBottom: 50, top: 150 }}
      onPress={() => navigation.navigate("Register")}
    >
      <Text
        style={{
          color: "white",
          textDecorationLine: "underline",
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        Don't Have An Account ?
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ marginTop: 30, paddingBottom: 50, top: 112 }}
      onPress={() => navigation.navigate('LogIn')}
    >
      <Text
        style={{
          color: "white",
          textDecorationLine: "underline",
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        Forgot Your Password ?
      </Text>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);
};

const styles = StyleSheet.create({
mainword: {
  marginBottom: 20,
  fontFamily: "Roboto",
  fontStyle: "normal",
  //fontWeight: 800,
  fontSize: 40,
  lineHeight: 40,
  color: "#FFFFFF",
},
facebook: {
  marginTop: 13,
  resizeMode: "contain",
  borderWidth: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: 20,
  position: "absolute",
  width: 120,
  height: 40,
  left: 30,
  top: 480,
},
google: {
  marginTop: 13,
  resizeMode: "contain",
  borderWidth: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: 20,
  position: "absolute",
  width: 120,
  height: 37,
  left: 250,
  top: 480,
},
foot2: {
  marginTop: 35,
},
foot1: {
  marginTop: 40,
  paddingTop: 40,
},
continue: {
  //fontWeight: 400,
  fontSize: 14,
  lineHeight: 20,
  marginTop: 10,
  color: "white",
},
customButton: {
  backgroundColor: "#334155",
  height: 40,
},
container: {
  flex: 1,
  width: "100%",

  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000000",
},
inputpass: {
  width: 300,
  borderBottomWidth: 1,
  borderBottomColor: "#FFFFFF",
  color:"#FFFFFF"
},
labelpass: {
  marginTop: 20,
  fontFamily: "Roboto",
  //fontWeight: 400,
  fontSize: 12,
  color: "#FFFFFF",
},
labelemail: {
  marginTop: 20,
  fontFamily: "Roboto",
  //fontWeight: 400,
  fontSize: 12,
  color: "#FFFFFF",
},
inputemail: {
  width: 300,
  borderBottomWidth: 1,
  borderBottomColor: "#FFFFFF",
  color:"#FFFFFF"
},
customButtonText: {
  color: "#fff",
  textAlign: "center",
  marginTop: 7,
},
});

export default LoginScreen;
