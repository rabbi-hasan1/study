import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ClassSchedule from "../../../components/ClassSchedule";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ClassSchedule />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#4648c9",
  },
});
