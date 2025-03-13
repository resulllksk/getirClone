import React, { useState, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const firstCategories = [
  { label: "Tatlılar", screen: "CategoryFilterScreen" },
  { label: "İndirimler", screen: "DiscountScreen" },
  { label: "Su & İçecek", screen: "DiscountScreen" },
  // Diğer kategoriler...
  
];

const secondCategories = [
  { label: "Giyim", screen: "ClothingScreen" },
  { label: "Elektronik", screen: "ElectronicsScreen" },
  { label: "Kitaplar", screen: "BooksScreen" },
  // Diğer kategoriler...
];

const CategoryFiltering = () => {
  const [selectedFirstCategory, setSelectedFirstCategory] = useState<string | null>(null);
  const [selectedSecondCategory, setSelectedSecondCategory] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleFirstPress = (screen: string, category: string) => {
    setSelectedFirstCategory(category);
    navigation.navigate(screen);
  };

  const handleSecondPress = (category: string) => {
    setSelectedSecondCategory(category);
  };

  // useFocusEffect kullanımında tür hatasını gidermek için useCallback kullanımı
  useFocusEffect(
    useCallback(() => {
      // Ekran odaklandığında yapılacak işlemler
      console.log('CategoryFiltering ekranına odaklandı');
      
      // Temizlik işlemleri veya ek kontroller burada yapılabilir
      return () => {
        console.log('CategoryFiltering ekranından çıkış yapıldı');
      };
    }, []) // Boş bağımlılık dizisi, bu efekti sadece ekran odaklandığında çalıştırır
  );

  return (
    <View style={styles.container}>
      {/* Birinci scrollable sekme */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.firstScrollContainer}>
        {firstCategories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleFirstPress(category.screen, category.label)}
            style={[
              styles.firstCategoryItem,
              selectedFirstCategory === category.label && styles.selectedFirstCategoryItem
            ]}
          >
            <Text
              style={[
                styles.firstCategoryText,
                selectedFirstCategory === category.label && styles.selectedFirstCategoryText
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* İkinci scrollable sekme */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.secondScrollContainer}>
        {secondCategories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSecondPress(category.label)}
            style={[
              styles.secondCategoryItem,
              selectedSecondCategory === category.label && styles.selectedSecondCategoryItem
            ]}
          >
            <Text
              style={[
                styles.secondCategoryText,
                selectedSecondCategory === category.label && styles.selectedSecondCategoryText
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstScrollContainer: {
    padding: 10,
    backgroundColor: 'lightgray',
  },
  firstCategoryItem: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 12,
  },
  selectedFirstCategoryItem: {
    backgroundColor: 'white', // Seçilen kategorinin arka plan rengi
  },
  firstCategoryText: {
    fontSize: 16,
    color: 'white',
  },
  selectedFirstCategoryText: {
    color: 'black', // Seçilen kategorinin metin rengi
  },
  secondScrollContainer: {
    padding: 10,
    backgroundColor: 'darkgray',
  },
  secondCategoryItem: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  selectedSecondCategoryItem: {
    backgroundColor: 'lightgray', // Seçilen kategorinin arka plan rengi
  },
  secondCategoryText: {
    fontSize: 16,
    color: 'gray',
  },
  selectedSecondCategoryText: {
    color: 'black', // Seçilen kategorinin metin rengi
  },
});

export default CategoryFiltering;
