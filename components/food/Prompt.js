import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { languageProvider } from "../../store/language";
import { pc } from "./content/prompt";

import BtnFill from "../shared/buttons/BtnFill";

const Prompt = ({ navigation, e, setE, close }) => {
  const { width, height } = useWindowDimensions();
  const { language } = languageProvider();
  const ln = pc[language];

  return (
    <View style={[styles.container, { width, height: height }]}>
      <View style={styles.inner}>
        <Image
          style={styles.image}
          source={require("../../assets/artworks/delete.png")}
        />
        <Text
          style={{
            fontSize: 15,
            color: "#46596C",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "auto",
          }}
        >
          {ln.msg}
        </Text>
        <BtnFill
          title={ln.confirm}
          st={{ marginBottom: 20 }}
          callback={() => navigation.dispatch(e)}
        />
        <TouchableOpacity
          onPress={() => {
            setE(null);
            close();
          }}
        >
          <Text>{ln.cancel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Prompt;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    marginBottom: 130,
    borderRadius: 18,
    width: "80%",
    height: "60%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    marginBottom: 20,
  },
});
