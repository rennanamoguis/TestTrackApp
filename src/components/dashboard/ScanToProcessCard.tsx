import { useTheme } from "@/src/theme/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ScanToProcessCard() {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.components.cardBackground,
          borderColor: theme.surface.border,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View
          style={[
            styles.badge,
            { backgroundColor: theme.brand.primaryContainer },
          ]}
        >
          <Ionicons
            name="qr-code-outline"
            size={22}
            color={theme.brand.primary}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.cardTitle, { color: theme.text.primary }]}>
            Scan to Process
          </Text>
          <Text style={[styles.cardSub, { color: theme.text.secondary }]}>
            Scan to view status or receive
          </Text>
        </View>
      </View>

      <Pressable
        style={[styles.primaryBtn, { backgroundColor: theme.brand.primary }]}
        android_ripple={{ color: "transparent" }}
        onPress={() => {
          //Todo:Navigate to Scan Tab
        }}
      >
        <Text style={[styles.primaryBtnText, { color: theme.brand.onPrimary }]}>
          Scan QR
        </Text>
      </Pressable>
      <Text style={[styles.link, { color: theme.brand.primary }]}>
        Use OCR / Enter Doc No.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    borderWidth: 1,
    padding: 16,
    gap: 12,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  badge: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  cardSub: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "500",
  },
  primaryBtn: {
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: "800",
  },
  link: {
    textAlign: "center",
    fontWeight: "700",
  },
});
