import { Tabs } from "expo-router";
import { CircleUser, MessageSquareText, Phone } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs initialRouteName="Chats/index" screenOptions={{ headerTitle: "BNS" }}>
      <Tabs.Screen
        name="Chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => <MessageSquareText color={color} />,
        }}
      />
      <Tabs.Screen
        name="Calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color }) => <Phone color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <CircleUser color={color} />,
        }}
      />
    </Tabs>
  );
}
