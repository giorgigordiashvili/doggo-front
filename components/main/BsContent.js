import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { languageProvider } from "../../store/language";
import { bsc } from "./content/bs";

import HistoryCard from "../shared/cards/HistoryCard";
import dog from "../../assets/dummy/dog1.jpg";

const BsContent = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { language } = languageProvider();
  const ln = bsc[language];

  let isData = true;
  let isCurrent = true;
  let isFood = true;

  return (
    <View style={[styles.container, { minHeight: height * 0.7 - 30 }]}>
      {!isData ? (
        <Text style={styles.seeMoreBtn}>{ln.empty}</Text>
      ) : (
        <>
          {isCurrent && (
            <View style={styles.colContainer}>
              <Text style={styles.colHeading}>{ln.curr}</Text>
              <HistoryCard
                name="Jora"
                img={dog}
                price={20}
                date="4 იანვარი / 13:00PM"
                rec={false}
              />
              <HistoryCard
                name="Saarsalu"
                img={dog}
                price={20}
                date="4 იანვარი / 13:00PM"
                rec={false}
              />
            </View>
          )}

          {isFood && (
            <View style={styles.colContainer}>
              <Text style={styles.colHeading}>{ln.order}</Text>
              <HistoryCard
                name="Saarsalu"
                img={dog}
                price={20}
                date="4 იანვარი / 13:00PM"
                rec={false}
              />
              <HistoryCard
                name="Saarsalu"
                img={dog}
                price={20}
                date="4 იანვარი / 13:00PM"
                rec={false}
              />
              <HistoryCard
                name="Saarsalu"
                img={dog}
                price={20}
                date="4 იანვარი / 13:00PM"
                rec={false}
              />
            </View>
          )}

          <View style={styles.colContainer}>
            <Text style={styles.colHeading}>{ln.history}</Text>
            <HistoryCard
              name="Saarsalu"
              img={dog}
              price={20}
              date="3 იანვარი / 13:00PM"
              rec={true}
            />
            <HistoryCard
              name="Saarsalu"
              img={dog}
              price={20}
              date="2 იანვარი / 13:00PM"
              rec={true}
            />
            <HistoryCard
              name="Saarsalu"
              img={dog}
              price={20}
              date="2 იანვარი / 13:00PM"
              rec={true}
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DrawerStack", { screen: "History" })
            }
          >
            <Text style={styles.seeMoreBtn}>{ln.all}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default BsContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  seeMoreBtn: {
    color: "#46596C",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  colContainer: { marginVertical: 20 },
  colHeading: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF7D4A",
    marginBottom: 20,
  },
});
