import UserCard from "@/types/UserCard";

let userList: UserCard[] = [];
for (let i = 0; i < 20; i++) {
  userList.push({
    id: i,
    name: `User${i}`,
    lastMessage: "Welcome",
    lastSeen: Date(),
    isPinned: false,
    isInContacts: false,
  });
}

export default userList;
