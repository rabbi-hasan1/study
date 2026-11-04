import { StyleSheet, Text, View } from "react-native";

export default function Routine() {
  return (
    <View style={styles.container}>
      <Text>Routine</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
