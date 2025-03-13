import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Ekranlar ve parametrelerinin tanımlandığı liste
export type RootStackParamList = {
  CategoryFilterScreen: { category?: string };
  DiscountScreen: undefined; // Diğer ekranlar ve parametreler
};

// Bileşenlerde kullanılacak navigasyon prop türü
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
