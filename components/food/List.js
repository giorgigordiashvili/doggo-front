import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AccordionCard from "./AccordionCard";

const List = ({ setIsorder }) => {
  return (
    <View style={styles.contaienr}>
      <AccordionCard
        title={"ედვანსი ზრდასრული ძაღლი 1კგ"}
        info={
          "Advance - Maxi Adult სუპერ პრემიუმ კლასის მშრალი საკვები რომელიც გათვლილია დიდი ზომის ზრდასრულ ძაღლებზე. საკვები მზადდება ქათმის ხორცითა და გლუკოზამინით"
        }
        price={"11,00 $"}
        setIsorder={setIsorder}
      />
      <AccordionCard
        title={"ედვანსი ზრდასრული ძაღლი 1კგ"}
        info={
          "Advance - Maxi Adult სუპერ პრემიუმ კლასის მშრალი საკვები რომელიც გათვლილია დიდი ზომის ზრდასრულ ძაღლებზე. საკვები მზადდება ქათმის ხორცითა და გლუკოზამინით"
        }
        price={"11,00 $"}
        setIsorder={setIsorder}
      />
      <AccordionCard
        title={"ედვანსი ზრდასრული ძაღლი 1კგ"}
        info={
          "Advance - Maxi Adult სუპერ პრემიუმ კლასის მშრალი საკვები რომელიც გათვლილია დიდი ზომის ზრდასრულ ძაღლებზე. საკვები მზადდება ქათმის ხორცითა და გლუკოზამინით"
        }
        price={"11,00 $"}
        last={true}
        setIsorder={setIsorder}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  contaienr: { marginTop: 40 },
});
