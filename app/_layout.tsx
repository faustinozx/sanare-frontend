import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // contentStyle: { backgroundColor: "#F5F5F5" },
      }}
    >
      {/* <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" /> */}
    </Stack>
  );
}