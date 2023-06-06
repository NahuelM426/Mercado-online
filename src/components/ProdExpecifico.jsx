import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux"
import {increment } from './Contador/CounterSlice'
const ProdExpecifico = (prods) => {

    const dispatch = useDispatch();

    return (
        <View key={prods.id} style={{margin:2}}>
            <Text style={style.text} >{prods.item.name}</Text>
            <Image style={style.image} source={{ uri: prods.item.imagen }} />
            <View style={{ flexDirection: "row",alignItems:"flex-start" }}>
                <Text style={{ marginTop: 2, }}>
                    <MaterialIcons name="attach-money" size={16} color="black" />
                    <Text style={{ margin: 2, fontSize: 16 }}>
                        {prods.item.Precio}
                    </Text>
                </Text>
                <TouchableWithoutFeedback onPress={() => dispatch(increment(prods.item))}>
                    <View style={{marginLeft:8}}>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default ProdExpecifico

const style = StyleSheet.create({
    text: {
        margin:2,
        fontSize: 15,
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold'
    },
    // icon: {
    //     textAlign
    // },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4,
        alignItems:"center"
    },
})
