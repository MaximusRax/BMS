import { ScrollView, Text, View } from "react-native";
import filterList from "./filters.json";
const renderCategoryList = () => {};

const index = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {filterList.map((item, idx) => (
          <Text key={idx} className="p-4">
            {item.title}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default index;
