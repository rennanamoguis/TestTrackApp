import { useTheme } from "@/src/theme/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DashboardHeader() {
  const theme = useTheme();
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: theme.text.primary }]}>
          Document Tracker
        </Text>
        <Text style={[styles.sub, { color: theme.text.secondary }]}>
          Main Office • Senior Staff
        </Text>
      </View>
      <View style={styles.actions}>
        <View
          style={[styles.iconBtn, { backgroundColor: theme.surface.surface }]}
        >
          <Ionicons
            name="notifications-outline"
            size={20}
            color={theme.text.primary}
          />
        </View>
        <View
          style={[styles.iconBtn, { backgroundColor: theme.surface.surface }]}
        >
          <Ionicons
            name="settings-outline"
            size={20}
            color={theme.text.primary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
  },
  sub: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: "500",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
