import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AccordionCard = ({ title, info, price, last = false, setIsorder }) => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    count > 0 ? setIsorder(true) : setIsorder(false);
  }, [count]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.container,
        {
          borderBottomWidth: last || active ? 0 : 0.2,
          flexDirection: active ? "column" : "row",
          backgroundColor: active ? "#F8F8F9" : "white",
          borderRadius: active ? 18 : 3,
        },
      ]}
      onPress={() => setActive(!active)}
    >
      {!active ? (
        <>
          <View style={[styles.colLeft, { maxWidth: "66%" }]}>
            <Text style={[styles.title, {}]}>
              {count > 0 ? `${count} X | ${title}` : title}
            </Text>
            <Text numberOfLines={2} style={[styles.info, {}]}>
              {info}
            </Text>
            <Text style={[styles.price, {}]}>{price}</Text>
          </View>
          <Image
            style={[styles.image, {}]}
            source={require("../../assets/dummy/dog1.jpg")}
          />
        </>
      ) : (
        <>
          <Image
            style={[styles.image, { width: 180, height: 180 }]}
            source={require("../../assets/dummy/dog1.jpg")}
          />
          <View style={[styles.colLeft]}>
            <Text style={[styles.title, {}]}>
              {count > 0 ? `${count} X | ${title}` : title}
            </Text>
            <Text numberOfLines={4} style={[styles.info, {}]}>
              {info}
            </Text>
            <Text style={[styles.price, {}]}>{price}</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#DDDDDD",
              marginVertical: 24,
            }}
          />
          <View style={styles.CounterContainer}>
            <Text style={{ color: "#46596C", fontSize: 14, fontWeight: "600" }}>
              რაოდენობა: {count}
            </Text>
            <View style={styles.counter}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => count > 0 && setCount(count - 1)}
              >
                {/* <Text
                  style={{
                    color: count <= 0 ? "#CDCFD0" : "#3CBF77",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  -
                </Text> */}
                <MaterialIcons
                  name="remove"
                  size={24}
                  color={count <= 0 ? "#CDCFD0" : "#3CBF77"}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 21,
                  color: "#3CBF77",
                  fontSize: 17,
                  fontWeight: "700",
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setCount(count + 1)}
              >
                {/* <Text
                  style={{
                    color: "#3CBF77",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  +
                </Text> */}
                <MaterialIcons name="add" size={24} color="#3CBF77" />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default AccordionCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#707070",
    padding: 20,
    paddingBottom: 25,
    marginBottom: 25,
  },
  colLeft: {
    justifyContent: "center",
  },
  image: {},
  title: {
    color: "#46596C",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  info: {
    color: "#ABB4BC",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10,
  },
  CounterContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
