import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { languageProvider } from "../../store/language";
import { Calendar } from "react-native-calendars";

import SwitchComp from "./SwitchComp";
import BtnFill from "../shared/buttons/BtnFill";

var INITIAL_DATE = new Date();

const DatePick = ({ navigation }) => {
  const { language } = languageProvider();
  const [selected, setSelected] = useState(0);
  const [selectedDate, setSelectedDate] = useState(INITIAL_DATE);
  const [selectedDate2, setSelectedDate2] = useState(null);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Text style={styles.title}>
        {language === "en" ? "Choose period" : "აირჩიე სიხშირე"}
      </Text>
      <SwitchComp selected={selected} setSelected={setSelected} />
      <Calendar
        hideArrows={true}
        hideExtraDays={true}
        disableMonthChange={true}
        onDayPress={(day) => {
          if (selected === 0) {
            setSelectedDate(day.dateString);
          }
          if (selected === 1) {
            if (selectedDate === INITIAL_DATE) {
              setSelectedDate(day.dateString);
            } else if (selectedDate2 === null) {
              setSelectedDate2(day.dateString);
            } else if (selectedDate2) {
              setSelectedDate(day.dateString);
            }
          }
        }}
        markingType="custom"
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "#E1F4DF",
            customStyles: {
              text: {
                color: "#43BE79",
                fontWeight: "bold",
              },
            },
          },
          [selectedDate2]: {
            selected: selected === 0 ? false : true,
            disableTouchEvent: selected === 0 ? false : true,
            selectedColor: "#E1F4DF",
            customStyles: {
              text: {
                color: selected === 0 ? "black" : "#43BE79",
                fontWeight: selected === 0 ? "300" : "bold",
              },
            },
          },
        }}
      />
      <BtnFill
        title={language === "en" ? "Select" : "დასრულება"}
        st={{ marginTop: 30 }}
        callback={() => navigation.navigate("Order")}
      />
    </ScrollView>
  );
};

export default DatePick;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#46596C",
  },
});
