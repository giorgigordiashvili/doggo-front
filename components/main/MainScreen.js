import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DrawerSidebar from "../shared/drawer/DrawerSidebar";
import MainHeader from "./MainHeader";
import Menu from "./Menu";
import MainFooter from "./MainFooter";

const MainScreen = () => {
  const [drawerShown, setDrawerShown] = useState(false);

  return (
    <View style={styles.container}>
      <MainHeader state={drawerShown} toogle={setDrawerShown} />
      <Menu />
      <MainFooter />
      {drawerShown && (
        <DrawerSidebar state={drawerShown} toogle={setDrawerShown} />
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
});
