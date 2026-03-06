import { useTheme } from "@/src/theme/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  const theme = useTheme();
  const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 78 : 66;
  const H_PADDING = 16;
  const BOTTOM_GAP = Platform.OS === "ios" ? 22 : 14;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.navigation.tabActive,
        tabBarInactiveTintColor: theme.navigation.tabInactive,
        headerStyle: {
          backgroundColor: theme.navigation.tabBarBackground,
        },
        headerShadowVisible: false,
        headerTintColor: theme.navigation.tabActive,
        tabBarStyle: {
          backgroundColor: theme.navigation.tabBarBackground,

          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          borderTopWidth: 0,
          overflow: "hidden",
          height: Platform.OS === "ios" ? 86 : 64,
          //paddingBottom: Platform.OS === "ios" ? 22 : 10,
          paddingBottom: Platform.select({
            ios: 22,
            android: 10,
            default: 0,
          }),
          paddingTop: 8,

          // shadowColor: theme.text.primary,
          // shadowOpacity: 0.08,
          // shadowRadius: 10,
          // shadowOffset: { width: 0, height: -4 },
          // elevation: 12,
        },
        // tabBarStyle: {
        //   position: "absolute",
        //   left: H_PADDING,
        //   right: H_PADDING,
        //   bottom: BOTTOM_GAP,
        //   height: TAB_BAR_HEIGHT,

        //   backgroundColor: theme.navigation.tabBarBackground,

        //   borderRadius: 22,
        //   borderTopWidth: 0,
        //   shadowColor: "#000",
        //   shadowRadius: 12,
        //   shadowOpacity: 0.12,
        //   elevation: 16,
        // },

        // tabBarItemStyle: {
        //   paddingTop: 6,
        // },

        // tabBarLabelStyle: {
        //   marginBottom: Platform.OS === "ios" ? 0 : 4,
        // },

        // tabBarIconStyle: {
        //   marginTop: 2,
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "qr-code" : "qr-code-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          title: "Documents",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "document-text" : "document-text-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
