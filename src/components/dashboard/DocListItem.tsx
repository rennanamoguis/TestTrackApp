import type { DashboardDoc } from "@/src/data/mockDataDashboard";
import { useTheme } from "@/src/theme/useTheme";
import { dueLabel, timeAgo } from "@/src/utils/time";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function mapStatusLabel(status: DashboardDoc["status"]) {
  switch (status) {
    case "FOR_RECEIVING":
      return "For Receiving";
    case "ON_HAND":
      return "On-Hand";
    case "FOR_ROUTING":
      return "For Routing";
    case "ESCALATED":
      return "Escalated";
  }
}

function StatusChip({ status }: { status: DashboardDoc["status"] }) {
  const theme = useTheme();

  const isEsc = status === "ESCALATED";
  const bg = isEsc ? theme.escalation.tint : theme.brand.primaryContainer;
  const fg = isEsc ? theme.escalation.icon : theme.brand.primary;

  return (
    <View style={[styles.chip, { backgroundColor: bg }]}>
      <Text style={[styles.chipText, { color: fg }]}>
        {mapStatusLabel(status)}
      </Text>
    </View>
  );
}

export default function DocListItem({
  doc,
  onPress,
}: {
  doc: DashboardDoc;
  onPress?: () => void;
}) {
  const theme = useTheme();

  const updated = timeAgo(doc.updatedAt);
  const due = dueLabel(doc.dueAt);
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "transparent" }}
      style={styles.row}
    >
      <View style={{ flex: 1, gap: 4 }}>
        <Text style={[styles.docNo, { color: theme.text.primary }]}>
          {doc.trackingNo}
        </Text>
        <Text
          style={[styles.title, { color: theme.text.primary }]}
          numberOfLines={1}
        >
          {doc.subject}
        </Text>
        <Text
          style={[styles.meta, { color: theme.text.secondary }]}
          numberOfLines={1}
        >
          {doc.fromOffice} → {doc.toOffice}
        </Text>
      </View>
      <View style={{ alignItems: "flex-end", gap: 6 }}>
        <StatusChip status={doc.status} />
        <Text style={[styles.updated, { color: theme.text.secondary }]}>
          {doc.status === "ESCALATED" && due ? due : updated}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
  },
  docNo: {
    fontSize: 12,
    fontWeight: "800",
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
  },
  meta: {
    fontSize: 12,
    fontWeight: "600",
  },
  updated: {
    fontSize: 11,
    fontWeight: "700",
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  chipText: {
    fontSize: 11,
    fontWeight: "900",
  },
});
