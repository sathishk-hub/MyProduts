/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from 'react-native';
import React, { useEffect } from 'react';

import FastImage from 'react-native-fast-image';
import AppColors from '../../utils/AppColors';
import AppFonts from '../../utils/AppFonts';
import useProductsService from '../../services/products/service';

const iStyles = StyleSheet.create({
    productCard: {
        flex: 1,
        marginHorizontal: AppFonts.hs(5),
        marginVertical: AppFonts.vs(20),
        borderRadius: AppFonts.hs(10),
        maxWidth: '100%',
    },
    lastProductCard: { maxWidth: '50%' },
    title: { fontFamily: AppFonts.MRB, color: AppColors.black },
    thumbnail: { width: '100%', height: AppFonts.hs(150) },
});

function ProductCard({ isLastItem = false, item, index }) {
    return (
        <View
            style={[
                iStyles.productCard,
                isLastItem && iStyles.lastProductCard,
            ]}>
            <FastImage
                style={iStyles.thumbnail}
                source={{
                    uri: item?.thumbnail,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
            />

            <Text key={String(index)} style={iStyles.title}>
                {item?.title}
            </Text>
        </View>
    );
}

function Home() {
    const { products, fetchProducts, fetchNextProductsSet } =
        useProductsService();

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        fetchNextProductsSet();
    }, [products]);

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? 'black' : 'white';

    return (
        <SafeAreaView style={[iStyles.screenContainer, { backgroundColor }]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
            />

            <FlatList
                data={products?.products}
                numColumns={2}
                renderItem={({ item, index }) => {
                    const isLastItem = index === products?.products?.length - 1;
                    return (
                        <ProductCard
                            isLastItem={isLastItem}
                            item={item}
                            index={index}
                        />
                    );
                }}
            />
        </SafeAreaView>
    );
}

export default Home;
