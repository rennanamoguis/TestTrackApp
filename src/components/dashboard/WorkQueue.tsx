import DocListItem from "@/src/components/dashboard/DocListItem";
import type {
  DashboardDoc,
  WorkQueueSegment,
} from "@/src/data/mockDataDashboard";
import { useTheme } from "@/src/theme/useTheme";
import React, { useMemo, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type Seg = "Receiving" | "On-Hand" | "Escalated";

export default function WorkQueue({
  queue,
}: {
  queue: Record<WorkQueueSegment, DashboardDoc[]>;
}) {
  const theme = useTheme();
  const [seg, setSeg] = useState<Seg>("Receiving");

  const data = useMemo(() => queue[seg], [queue, seg]);

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
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text.primary }]}>
          My Work Queue
        </Text>
        <View
          style={[
            styles.segmentWrap,
            { backgroundColor: theme.surface.surfaceAlt },
          ]}
        >
          {(["Receiving", "On-Hand", "Escalated"] as Seg[]).map((key) => {
            const active = seg === key;
            return (
              <Pressable
                key={key}
                onPress={() => setSeg(key)}
                android_ripple={{ color: "transparent" }}
                style={[
                  styles.segment,
                  active && { backgroundColor: theme.brand.primaryContainer },
                ]}
              >
                <Text
                  style={[
                    styles.segmentText,
                    {
                      color: active
                        ? theme.brand.primary
                        : theme.text.secondary,
                    },
                  ]}
                >
                  {key}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View
            style={[styles.divider, { backgroundColor: theme.surface.border }]}
          />
        )}
        renderItem={({ item }) => (
          <DocListItem
            doc={item}
            onPress={() => {
              //Todo: router.push
            }}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={{ color: theme.text.secondary, paddingVertical: 10 }}>
            No documents here.
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 14,
    gap: 12,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    //justifyContent: "space-between",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "900",
    //flexShrink: 1,
    marginRight: 8,
  },
  segmentWrap: {
    flexDirection: "row",
    borderRadius: 999,
    padding: 4,
    gap: 6,
    alignSelf: "stretch",
    //flexShrink: 1,
    //overflow: "hidden",
  },
  segment: {
    flex: 1,
    alignItems: "center",
    //paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    //flexShrink: 1,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: "800",
    //flexShrink: 1,
  },
  divider: {
    height: 1,
    width: "100%",
  },
});
