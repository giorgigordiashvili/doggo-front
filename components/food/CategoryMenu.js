import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryMenu = ({ selected, setSelected }) => {
  return (
    <View style={{}}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.item,
            {
              backgroundColor: selected === 0 ? "#3CBF77" : "#F6FBF6",
            },
          ]}
          onPress={() => {
            setSelected(0);
          }}
        >
          <Text
            style={[
              styles.txt,
              { color: selected === 0 ? "white" : "#3CBF77" },
            ]}
          >
            კატეგორია 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.item,
            {
              backgroundColor: selected === 1 ? "#3CBF77" : "#F6FBF6",
            },
          ]}
          onPress={() => {
            setSelected(1);
          }}
        >
          <Text
            style={[
              styles.txt,
              { color: selected === 1 ? "white" : "#3CBF77" },
            ]}
          >
            კატეგორია 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.item,
            {
              backgroundColor: selected === 2 ? "#3CBF77" : "#F6FBF6",
            },
          ]}
          onPress={() => {
            setSelected(2);
          }}
        >
          <Text
            style={[
              styles.txt,
              { color: selected === 2 ? "white" : "#3CBF77" },
            ]}
          >
            კატეგორია 3
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CategoryMenu;

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    width: 130,
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  txt: {
    fontSize: 14,
    fontWeight: "600",
  },
});
