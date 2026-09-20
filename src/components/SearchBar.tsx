import {
  View,
  Text,
  TextInput,
  TextInputComponent,
  TextInputProps,
} from "react-native";
import React, { useRef } from "react";
import Icon from "./Icons";

const SearchBar = () => {
  const searchText = useRef<TextInput>(null);
  return (
    <View>
      <Icon name="Search" />
      <TextInput ref={searchText} />
    </View>
  );
};

export default SearchBar;
