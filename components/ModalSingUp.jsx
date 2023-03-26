import { Alert, Pressable, StyleSheet, TextInput, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Button, Input, Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import Colors from "../constants/Colors";
import { Modal } from "react-native";
import { createCurretUser } from "../store/user.actions";
import { firebaseConfig } from "../firebase/firebase.config";
import { initializeApp } from "firebase/app";
import { useDispatch } from "react-redux";

const ModalSingUp = ({ isVisibility, setVisibility }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState(false);
  const [create, setCreate] = useState(false);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const dispatch = useDispatch()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(createCurretUser(user.displayName, user.email ))
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error al iniciar secion", err.message, [
          { text: "volver" },
        ]);
      });
  };
  const handleCreateAccount = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("accoun Created");
        const user = userCredential.user;
        await updateProfile(auth.currentUser, {
          displayName: userName,
        });
        console.log(user);
        Alert.alert(
          "Usuario creado",
          `
          nombre : ${user.displayName}
          email : ${user.email} 

          
          Ya Puedes iniciar seccion. 
        `,
          [
            {
              text: "ok",
            },
          ]
        );
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error al crear cuenta", err.message, [{ text: "volver" }]);
      });
  };

  return (
    <Modal visible={isVisibility} animationType="fade" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <View style={styles.salir}>
            <Pressable onPress={() => setVisibility(false)}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </Pressable>
          </View>
          <Text style={styles.homeTitle}>
            Crea o logueate si ya tiene usuario
          </Text>
          <View style={styles.actions}>
            <View>
              <Text style={styles.buttonMessage}>Ya tienes una cuenta ?</Text>
              <Button
                title={"Iniciar"}
                onPress={() => {
                  setCreate(false);
                  setLogin(true);
                }}
                color={Colors.LIGTH_PINK}
              />
            </View>
            <View style={styles.create}>
              <Text style={styles.buttonMessage}>
                O crea tu cuenta por aqui?
              </Text>
              <Button
                title="crear Cuenta"
                onPress={() => {
                  setCreate(true);
                  setLogin(true);
                }}
                color={Colors.MAROON}
              />
            </View>
          </View>
          {create && login ? (
            <View>
              <Text style={styles.title}>
                Nombre Usuario{" "}
                <FontAwesome5 name="user-alt" size={24} color="black" />{" "}
              </Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                placeholder="nombre usuario"
                onChangeText={(text) => setUserName(text)}
              />
            </View>
          ) : (
            ""
          )}

          {login ? (
            <View>
              <Text style={styles.title}>
                Usuario <FontAwesome5 name="user-alt" size={24} color="black" />{" "}
              </Text>
              <TextInput
                style={styles.input}
                autoCapitalize={"none"}
                placeholder="email de usuario"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
              <Text style={styles.title}>
                Contraseña <FontAwesome5 name="key" size={24} color="black" />
              </Text>
              <TextInput
                style={styles.input}
                autoCapitalize={"none"}
                placeholder="contraseña"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          ) : (
            ""
          )}
          <View style={styles.buttonLogin}>
            {create && (
              <Button
                title="crear Cuenta"
                onPress={handleCreateAccount}
                color={Colors.MAROON}
              />
            )}
            {login && !create && (
              <Button
                title={"Iniciar"}
                onPress={handleLogin}
                color={Colors.LIGTH_PINK}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSingUp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  modal: {
    position: "relative",
    margin: 20,
    backgroundColor: Colors.PEACH_PUFF,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonMessage: {
    marginBottom: 5,
  },
  homeTitle: {
    fontSize: 20,
  },
  title: {
    fontSize: 15,
    marginTop: 10,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderRadius: 5,
    width: 200,
    padding: 5,
  },
  actions: {
    justifyContent: "space-around",
    flexDirection: "row",

    alignItems: "center",
    height: 100,
    width: "90%",
  },
  salir: {
    position: "absolute",
    alignItems: "center",
    right: 12,
    top: 8,
    padding: 3,
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: Colors.BLUSH,
    borderRadius: 10,
  },
  buttonLogin: {
    marginTop: 10,
  },
});
