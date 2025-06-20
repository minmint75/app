import { Text, View } from "react-native";
import Demo1 from "./demo1"
import Demo2 from "./demo2"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Demo1/>
      <Demo2/>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
