import React from 'react'
import { ScrollView } from 'react-native'
import HeaderMain from "../../component/HeaderMain"
import BannerCaruesel from "../../component/BannerCarousel"
import CategoryItem from "../../component/CategoryItem"
function index (){
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:'white'}}>
        <HeaderMain />
        <BannerCaruesel />
        <CategoryItem />

    </ScrollView>
  )
}

export default index