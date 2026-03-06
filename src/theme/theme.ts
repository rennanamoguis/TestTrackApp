import { Appearance, ColorSchemeName } from "react-native";

export type ThemeMode = keyof typeof tokens;
export type ThemeTokens = (typeof tokens)[ThemeMode];

export const tokens = {
  light: {
    brand: {
      primary: "#0F766E",
      onPrimary: "#FFFFFF",
      primaryContainer: "#CCFBF1",
      onPrimaryContainer: "#064E3B",
      secondary: "#0B2A3C",
      onSecondary: "#FFFFFF",
    },
    surface: {
      background: "#F7FAFC",
      surface: "#FFFFFF",
      surfaceAlt: "#F1F5F9",
      border: "#E2E8F0",
    },
    text: {
      primary: "#0F172A",
      secondary: "#475569",
      inverse: "#FFFFFF",
    },
    status: {
      success: "#16A34A",
      warning: "#F59E0B",
      error: "#DC2626",
      info: "#2563EB",
    },
    navigation: {
      tabBarBackground: "#FFFFFF",
      tabActive: "#0F766E",
      tabInactive: "#475569",
      scanFabBackground: "#0F766E",
      scanFabIcon: "#FFFFFF",
    },
    components: {
      cardBackground: "#FFFFFF",
      inputBackground: "#F1F5F9",
      inputPlaceholder: "#64748B",
      divider: "#E2E8F0",
      shadow: "rgba(15, 23, 42, 0.10)",
    },
    timeline: {
      current: "#0F766E",
      completed: "#16A34A",
      pending: "#E2E8F0",
      text: "#0F172A",
    },
    escalation: {
      tint: "rgba(245, 158, 11, 0.14)",
      icon: "#F59E0B",
      text: "#92400E",
    },
    security: {
      restrictedBannerBackground: "rgba(15, 118, 110, 0.10)",
      restrictedBannerText: "#0F766E",
      restrictedIcon: "#0F766E",
    },
  },
  dark: {
    brand: {
      primary: "#2DD4BF",
      onPrimary: "#062A2A",
      primaryContainer: "#0B3A3A",
      onPrimaryContainer: "#B8FFF4",
      secondary: "#0B2A3C",
      onSecondary: "#EAF6FF",
    },
    surface: {
      background: "#081316",
      surface: "#0F1F24",
      surfaceAlt: "#13282E",
      border: "#1E3A42",
    },
    text: {
      primary: "#E6F6F5",
      secondary: "#9FB6B5",
      inverse: "#062A2A",
    },
    status: {
      success: "#4ADE80",
      warning: "#FBBF24",
      error: "#FF6B6B",
      info: "#60A5FA",
    },
    navigation: {
      tabBarBackground: "#0F1F24",
      tabActive: "#2DD4BF",
      tabInactive: "#9FB6B5",
      scanFabBackground: "#2DD4BF",
      scanFabIcon: "#062A2A",
    },
    components: {
      cardBackground: "#0F1F24",
      inputBackground: "#13282E",
      inputPlaceholder: "#6B8B8A",
      divider: "#1E3A42",
      shadow: "rgba(0, 0, 0, 0.35)",
    },
    timeline: {
      current: "#2DD4BF",
      completed: "#4ADE80",
      pending: "#1E3A42",
      text: "#E6F6F5",
    },
    escalation: {
      tint: "rgba(251, 191, 36, 0.16)",
      icon: "#FBBF24",
      text: "#FDE68A",
    },
    security: {
      restrictedBannerBackground: "rgba(45, 212, 191, 0.10)",
      restrictedBannerText: "#2DD4BF",
      restrictedIcon: "#2DD4BF",
    },
  },
} as const;

/** Force valid mode; fall back to system if missing. */
export function resolveThemeMode(mode?: ThemeMode | null): ThemeMode {
  if (mode === "light" || mode === "dark") return mode;
  const system = Appearance.getColorScheme();
  return system === "dark" ? "dark" : "light";
}

/** Get the theme tokens for a given mode (or system mode by default). */
export function getTheme(mode?: ThemeMode | null): ThemeTokens {
  const resolved = resolveThemeMode(mode);
  return tokens[resolved];
}

/** Convenience helper if you already have ColorSchemeName from RN hook */
export function getThemeFromColorScheme(
  colorScheme: ColorSchemeName,
): ThemeTokens {
  return tokens[colorScheme === "dark" ? "dark" : "light"];
}

/** Typed style shortcut: themeStyle(theme, (t) => ({ ... })) */
export function themeStyle<T>(
  theme: ThemeTokens,
  builder: (t: ThemeTokens) => T,
): T {
  return builder(theme);
}
