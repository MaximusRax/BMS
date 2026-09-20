import Icon, { IconName } from "@/components/Icons";
import { FlatList, ScrollView, Text, View } from "react-native";
import filterList from "./filters.json";
import userList from "@/DemoData/DemoChatListProfile";
import { useState } from "react";
import ChatCard from "@/components/ChatsTab/ChatCard";
import { useNavigation, useRouter } from "expo-router";

const FilterListScrollView = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2 px-2"
    >
      {filterList.map((item, idx) => (
        <View
          key={idx}
          className={`bg-primary px-4 py-1.5 my-1 rounded-full flex-row items-center gap-2`}
        >
          <Icon
            name={item.icon as IconName}
            size={16}
            className={`color-white `}
          />

          <Text className="text-white">{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const index = () => {
  const router = useRouter();
  const [selectedFltr, setSelectedFltr] = useState(filterList[0]);
  return (
    <View className="px-2 ">
      <FlatList
        data={userList}
        renderItem={({ item: user }) => (
          <ChatCard
            id={user.id}
            name={user.name}
            isInContacts={user.isInContacts}
            isPinned={user.isPinned}
            lastMessage={user.lastMessage}
            lastSeen={user.lastSeen}
            onPress={() => {
              router.push(`/Chats/${user.id}`);
            }}
          />
        )}
        ListHeaderComponent={FilterListScrollView}
      />
    </View>
  );
};

export default index;
