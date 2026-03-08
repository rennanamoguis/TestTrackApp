import type { DashboardCounts } from "@/src/data/mockDataDashboard";
import { useTheme } from "@/src/theme/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function StatTile({
  title,
  value,
  icon,
  tint,
  onPress,
}: {
  title: string;
  value: number;
  icon: any;
  tint: string;
  onPress?: () => void;
}) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "transparent" }}
      style={[
        styles.tile,
        { backgroundColor: tint, borderColor: theme.surface.border },
      ]}
    >
      <Ionicons name={icon} size={20} color={theme.text.primary} />
      <Text style={[styles.title, { color: theme.text.secondary }]}>
        {title}
      </Text>
      <Text style={[styles.value, { color: theme.text.primary }]}>{value}</Text>
    </Pressable>
  );
}

export default function StatGrid({ counts }: { counts: DashboardCounts }) {
  const theme = useTheme();
  return (
    <View style={styles.grid}>
      <StatTile
        title="For Receiving"
        value={counts.forReceiving}
        icon="download-outline"
        tint={theme.brand.primaryContainer}
      />
      <StatTile
        title="On-Hand"
        value={counts.onHand}
        icon="folder-open-outline"
        tint={theme.surface.surfaceAlt}
      />
      <StatTile
        title="For Routing"
        value={counts.forRouting}
        icon="paper-plane-outline"
        tint={theme.surface.surfaceAlt}
      />
      <StatTile
        title="Overdue"
        value={counts.overdue}
        icon="alert-circle-outline"
        tint={theme.escalation.tint}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  tile: {
    width: "48%",
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    gap: 6,
  },
  title: { fontSize: 13, fontWeight: "700" },
  value: { fontSize: 22, fontWeight: "900" },
});
