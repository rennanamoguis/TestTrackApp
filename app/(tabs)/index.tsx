import { useTheme } from "@/src/theme/useTheme";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import ScanToProcessCard from "@/src/components/dashboard/ScanToProcessCard";
import StatGrid from "@/src/components/dashboard/StatGrid";
import WorkQueue from "@/src/components/dashboard/WorkQueue";

import type {
  DashboardCounts,
  DashboardDoc,
  WorkQueueSegment,
} from "@/src/data/mockDataDashboard";

import { fetchDashboard } from "@/src/services/dashboardService";
import { useEffect, useState } from "react";

type DashboardState = {
  counts: DashboardCounts;
  queue: Record<WorkQueueSegment, DashboardDoc[]>;
};

export default function Index() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [data, setData] = useState<DashboardState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchDashboard();
      setData(res);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load database.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: theme.surface.background,
        },
      ]}
    >
      <ScrollView
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 140 + insets.bottom,
          paddingHorizontal: 16,
          gap: 14,
        }}
        showsVerticalScrollIndicator={false}
      >
        <DashboardHeader />
        {!loading && error && (
          <View
            style={{
              borderWidth: 1,
              borderColor: theme.surface.border,
              borderRadius: 18,
              padding: 16,
              backgroundColor: theme.components.cardBackground,
              gap: 10,
            }}
          >
            <Text style={{ color: theme.text.secondary }}>{error}</Text>
            <Pressable
              onPress={load}
              android_ripple={{ color: "transparent" }}
              style={{
                height: 44,
                borderRadius: 14,
                backgroundColor: theme.brand.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: theme.brand.onPrimary, fontWeight: "900" }}>
                Retry
              </Text>
            </Pressable>
          </View>
        )}
        {!loading && data && (
          <>
            <ScanToProcessCard />
            <StatGrid counts={data.counts} />
            <WorkQueue queue={data.queue} />
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
