import { Tabs } from "expo-router";
import { CircleUser, MessageSquareText, Phone } from "lucide-react-native";
import { useRef } from "react";
import { SearchBar } from "react-native-screens";

export default function TabLayout() {
  const searchText = useRef(null);
  return (
    <Tabs
      initialRouteName="Chats/index"
      screenOptions={{
        headerTitle: "BNS",
        headerSearchBarOptions: {
          // autoFocus: true,
          ref: searchText,
          placeholder: "Search...",
        },
      }}
    >
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
