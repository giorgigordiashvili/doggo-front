import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import { languageProvider } from "../../store/language";
import { cc } from "./content/confirm";

import BtnFill from "../shared/buttons/BtnFill";

const Confirmation = ({ navigation }) => {
  const { language } = languageProvider();
  const ln = cc[language];

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/artworks/orderconfirm.png")}
        style={{ width: "80%", marginTop: "30%" }}
        resizeMode={"contain"}
      />
      <Text style={{ color: "#3CBF77", fontSize: 18, marginVertical: 20 }}>
        {ln.title}
      </Text>
      <Text style={{ textAlign: "center", maxWidth: "80%" }}>{ln.sub}</Text>
      <TouchableOpacity style={{ marginTop: "auto", marginBottom: 20 }}>
        <Text>{ln.btnDet}</Text>
      </TouchableOpacity>
      <BtnFill
        title={ln.btnMain}
        st={{ width: "85%" }}
        callback={() => navigation.navigate("Main", { screen: "Main" })}
      />
    </SafeAreaView>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
