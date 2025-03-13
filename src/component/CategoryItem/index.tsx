import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const images = [
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Tatlılar", screen: "CategoryFilterScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "İndirimler", screen: "DiscountScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Su & İçecek", screen: "BeveragesScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Meyve & Sebze", screen: "FruitsAndVegetablesScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Fırından", screen: "BakeryScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Temel Gıda", screen: "BasicFoodScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Atıştırmalık", screen: "SnacksScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Dondurma", screen: "IceCreamScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Süt Ürünleri", screen: "DairyScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Kahvaltılık", screen: "BreakfastScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Yiyecek", screen: "FoodScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Fit & Form", screen: "FitAndFormScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Kişisel Bakım", screen: "PersonalCareScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Evcil Hayvan", screen: "PetCareScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Bebek", screen: "BabyCareScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Cinsel Sağlık", screen: "SexualHealthScreen" },
  { uri: "https://img.icons8.com/?size=100&id=114250&format=png&color=000000", label: "Ev Bakım", screen: "HomeCareScreen" },
];

const generateRows = (data: { uri: string; label: string; screen: string }[]) => {
  const rows: { uri: string; label: string; screen: string }[][] = [];
  for (let i = 0; i < data.length; i += 4) {
    rows.push(data.slice(i, i + 4));
  }
  return rows;
};

const CategoryItem = () => {
  const navigation = useNavigation();
  const rows = generateRows(images);

  const handlePress = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <FlatList
      data={rows}
      renderItem={({ item }) => (
        <View style={styles.row}>
          {item.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(image.screen)} style={styles.item}>
              <Image
                style={styles.image}
                source={{ uri: image.uri }}
              />
              <Text style={styles.text}>{image.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  item: {
    alignItems: 'center',
    width: width * 0.22,
  },
  image: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 8,
  },
  text: {
    fontSize: 13,
    color: 'gray',
    fontWeight: '500',
    marginTop: 5,
  },
});

export default CategoryItem;
