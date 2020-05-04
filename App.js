import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Deck from "./src/Deck";
import { DATA } from "./Data/data";
import { Card, Button, Icon } from "react-native-elements";

const data = DATA;

export default function App() {
  function renderCard(item) {
    return (
      <Card key={item.id} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>{item.text}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    );
  }
  function renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>No More Cards here !</Text>
        <Button title="Get More Cards!!" />
      </Card>
    );
  }
  return (
    <View style={styles.container}>
      <Deck
        data={data}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        // onSwipeRight={() => console.log("Swiped Right")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 35,
  },
});
