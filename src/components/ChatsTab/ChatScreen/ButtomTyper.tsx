import { View, Text, TextInput } from "react-native";
import React from "react";
import { Paperclip } from "lucide-react-native/icons";
import { SendHorizontal } from "lucide-react-native";

const ButtomTyper = () => {
  return (
    <View className="flex bg-neutral-600 min-h-14 border-t-2 border-t-secondary border-dashed flex-row items-center gap-4 px-2">
      <Paperclip color={"white"} />
      <TextInput
        className="min-h-4 bg-white rounded-xl flex-1 p-2"
        placeholder="Type here..."
      />
      <SendHorizontal color={"white"} />
    </View>
  );
};

export default ButtomTyper;
