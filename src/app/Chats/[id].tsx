import {
  View,
  Text,
  StatusBar,
  useColorScheme,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { EllipsisVertical, Phone, Video } from "lucide-react-native/icons";
import ButtomTyper from "@/components/ChatsTab/ChatScreen/ButtomTyper";
import Message from "@/components/ChatsTab/ChatScreen/Message";

const demoChat: string[] = [];
for (let i = 0; i < 100; i++) demoChat.push(`Chat ${i}`);

const ChatScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Name",
      headerRight: () => (
        <View className="flex-row gap-4 items-center">
          <Phone size={20} />
          <Video />
          <EllipsisVertical />
        </View>
      ),
    });
  }, []);

  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView edges={["bottom"]}>
      <StatusBar
        barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
      />
      <KeyboardAvoidingView
        className="h-full"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          data={demoChat}
          inverted
          contentContainerClassName="p-2 gap-2"
          renderItem={(item) => <Message message={item.item} />}
        />
        <ButtomTyper />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
