import { PressableProps } from "react-native";

export default interface UserCard {
  id: string;
  name: string;
  lastMessage: string;
  lastSeen: Date | string;
  isPinned: boolean;
  isInContacts: boolean;
}
export type ChatCardProps = UserCard & Pick<PressableProps, "onPress">;
