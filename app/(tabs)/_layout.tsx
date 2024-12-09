import { Stack } from "expo-router";

export const Layout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="(tabs)/cadastro"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="(tabs)/tasks"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}
