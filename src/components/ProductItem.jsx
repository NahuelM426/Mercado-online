import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

const ProducItem = (prods) => {
    return (
        <View key={prods.id} style={style.view}>
            <Image style={style.image} source={{ uri: prods.item.imagen}} />
            <Text>{prods.item.name}</Text>
        </View>
    )
}

export default ProducItem

const style = StyleSheet.create({
    view:{
        margin:3,
        marginLeft:13
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4
    },
})
