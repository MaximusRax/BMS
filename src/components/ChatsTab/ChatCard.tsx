import { View, Text, Image, Pressable } from "react-native";
import { ChatCardProps } from "@/types/UserCard";

const ChatCard = ({
  name,
  lastMessage,
  lastSeen,
  isInContacts,
  isPinned,
  onPress,
}: ChatCardProps) => {
  const formatedDate = new Date(lastSeen).toLocaleDateString("en-IN");
  return (
    <Pressable onPress={onPress}>
      <View className="flex-row  flex-1 min-h-24 rounded-2xl items-center px-2 gap-4">
        <Image
          source={{ uri: "https://i.pravatar.cc" }}
          className="size-18 rounded-full"
        />
        <View className="flex-1">
          <View className="flex-row  justify-between">
            <Text className="font-bold text-xl">{name}</Text>
            <Text className="">{formatedDate}</Text>
          </View>
          <Text className="font-serif">{lastMessage}</Text>
        </View>
        <View></View>
      </View>
    </Pressable>
  );
};

export default ChatCard;
