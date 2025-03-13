import React, { useState } from 'react';
import { FlatList, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

function Index() {
  const [banners, setBanners] = useState<string[]>([
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/kozalak-manti-asama-10.jpg",
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/kizarmis-manti-onecikan.jpg",
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/01/kusursuz-izmir-kofte-yemekcom.jpg",
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/02/siverek-tava-yemekcom.jpg"
  ])

  return (
    <FlatList 
      data={banners}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width: width, height: height * 0.25, resizeMode: 'cover' }}
        />
      )}

      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}

    />
  );
}

export default Index;
