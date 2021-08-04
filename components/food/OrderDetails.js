import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import {
  Location,
  Calendar,
  Bag,
  Chat,
  ChevronDown,
} from "react-native-iconly";

import { languageProvider } from "../../store/language";
import { oc } from "./content/order";

import BtnFill from "../shared/buttons/BtnFill";

const ItemContainer = ({ title, count, price }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <Bag set="bold" primaryColor="#3CBF77" size={24} />
      <Text
        numberOfLines={1}
        style={{
          color: "#46596C",
          fontWeight: "400",
          fontSize: 16,
          marginLeft: 18,
          maxWidth: "60%",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#46596C",
          fontWeight: "400",
          fontSize: 16,
          marginLeft: 18,
        }}
      >
        x{count}
      </Text>
      <Text
        style={{
          marginLeft: "auto",
          color: "#46596C",
          fontWeight: "400",
          fontSize: 16,
        }}
      >
        {price}$
      </Text>
    </View>
  );
};

const TranscriptContainer = ({ title, price, disc }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <Text style={{ fontSize: 16, color: "#46596C" }}>{title}</Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "700",
          color: disc ? "#FF7D4A" : "#46596C",
        }}
      >
        {price}
      </Text>
    </View>
  );
};

const OrderDetails = ({ navigation }) => {
  const { language } = languageProvider();
  const ln = oc[language];

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <View style={styles.bannerContainer}>
        <Image
          resizeMode="contain"
          style={styles.banner}
          source={require("../../assets/icons/zoomart.png")}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{ln.general}</Text>
        <View style={styles.generalDetContainer}>
          <Location set="bold" primaryColor="#3CBF77" size={24} />
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                color: "#46596C",
                fontSize: 16,
                fontWeight: "500",
                marginBottom: 8,
              }}
            >
              სულხან ცინცაძის 58
            </Text>
            <Text style={{ color: "#46596C", fontSize: 14, fontWeight: "400" }}>
              კორპუსი C / სართული 2 / ბინა 58
            </Text>
          </View>
        </View>
        <View style={[styles.generalDetContainer, styles.bord]}>
          <Calendar set="bold" primaryColor="#3CBF77" size={24} />
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                color: "#46596C",
                fontSize: 16,
                fontWeight: "500",
                marginBottom: 8,
              }}
            >
              {ln.sched}
            </Text>
            <Text style={{ color: "#46596C", fontSize: 14, fontWeight: "400" }}>
              5 მარტი, 25 მარტი
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{ln.selecteditems}</Text>
        <ItemContainer
          title="ედვანსი ზრდასრული ძა…"
          count={1}
          price={"10.00"}
        />
        <ItemContainer
          title="ედვანსი ზრდასრული ძა…"
          count={1}
          price={"10.00"}
        />
        <ItemContainer
          title="ედვანსი ზრდასრული ძა…"
          count={1}
          price={"10.00"}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 15,
          }}
        >
          <Chat set="bold" primaryColor="#3CBF77" size={24} />
          <View style={{ marginLeft: 18 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#46596C" }}>
              {ln.comment}
            </Text>
            <Text
              numberOfLines={2}
              style={{ maxWidth: "90%", color: "#A2ACB5", marginTop: 5 }}
            >
              {ln.comPlaceholder}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{ln.pay}</Text>
        <TouchableOpacity style={styles.paySelect}>
          <Image
            source={require("../../assets/icons/visa.png")}
            style={{ marginRight: 10 }}
          />
          <Text style={{ marginRight: 10, color: "#46596C" }}>
            **** **** ****
          </Text>
          <Text style={{ color: "#46596C" }}>4344</Text>
          <ChevronDown
            set="light"
            primaryColor="#200E32"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.sectionContainer,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Text style={{ color: "#FF7D4A", fontWeight: "700", fontSize: 16 }}>
          DOGGO {ln.discount}
        </Text>
        <Switch
          trackColor={{ false: "#F8F8F9", true: "#43BE79" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#F8F8F9"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.botContainer}>
        <TranscriptContainer title={ln.prodtotal} price={"20"} />
        <TranscriptContainer title={ln.delivery} price={"3.20"} />
        <TranscriptContainer title={ln.disc} price={"-5"} disc={true} />
        <TranscriptContainer title={ln.total} price={"18.20"} />
      </View>
      <BtnFill
        title={ln.btn}
        callback={() => navigation.navigate("OrderConfirm")}
      />
    </ScrollView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  bannerContainer: {
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    paddingVertical: 20,
    marginBottom: 44,
  },
  banner: { width: 262 },
  sectionContainer: { marginBottom: 44 },
  sectionTitle: {
    color: "#A2ACB5",
    fontWeight: "600",
  },
  generalDetContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
  },
  bord: {
    borderWidth: 1,
    borderColor: "#D9F2E4",
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  paySelect: {
    borderRadius: 18,
    backgroundColor: "#F8F8F9",
    height: 75,
    width: "100%",
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  botContainer: {
    borderTopColor: "#D9F2E4",
    borderTopWidth: 1,
    paddingVertical: 25,
  },
});
