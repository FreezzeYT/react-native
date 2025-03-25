import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading} numberOfLines={1}>
        Welcome to My Expo App
      </Text>

      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        value={text}
        onChangeText={setText}
      />

      <Button
        title="Press Me"
        onPress={() => {
          alert(`You entered: ${text}`);
          {
            setText(" ");
          }
        }}
      />

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => alert("Touchable Pressed!")}
      >
        <Text style={styles.touchableText}>Tap Me</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  touchable: {
    marginTop: 10,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  touchableText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
