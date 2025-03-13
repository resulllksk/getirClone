import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryFiltering from '../../component/CategoryFiltering';

const DiscountScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
            <CategoryFiltering/>

      <Text >İndirimler</Text>

      {/* İndirim içeriği burada */}
    </ScrollView>
  );
};


export default DiscountScreen;
