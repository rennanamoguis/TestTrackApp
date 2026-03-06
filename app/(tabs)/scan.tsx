import { useTheme } from "@/src/theme/useTheme";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScanScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface.background,
          paddingBottom: 120 + insets.bottom,
        },
      ]}
    >
      <Text style={[styles.text, { color: theme.text.primary }]}>
        Scan Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    //color: "#fff",
  },
});
