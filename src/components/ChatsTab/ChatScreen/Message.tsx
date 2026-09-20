import { View, Text } from "react-native";
import React from "react";

const Message = ({ message }: { message: string }) => {
  const fromSelf = false;
  return (
    <>
      <View
        className={`absolute top-0 size-0  border-t-14 border-r-14 border-t-primary border-r-transparent ${fromSelf ? "self-end" : "rotate-90"}`}
      />
      <View
        className={`min-h-fit bg-primary rounded p-4 w-[80%] mx-3 ${fromSelf && "self-end"}`}
      >
        <Text className="text-white">{message}</Text>
      </View>
    </>
  );
};

export default Message;
