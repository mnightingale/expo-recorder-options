import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useAudioRecorder, RecordingPresets } from "expo-audio";

const options = {
  ...RecordingPresets.HIGH_QUALITY,
  web: {
    mimeType: "audio/webm",
    bitsPerSecond: 96000,
  },
};

export default function App() {
  const recorder = useAudioRecorder(options);

  return (
    <View style={styles.container}>
      <Text>Expected: {JSON.stringify(options.web)}</Text>
      <Text>Actual: {JSON.stringify(recorder.options)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
