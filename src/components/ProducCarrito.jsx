import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux"
import { decrement, incrementCantidad, decrementarCantidad } from './Contador/CounterSlice'

const ProducCarrito = (prods) => {

    const dispatch = useDispatch();

    return (
        <View key={prods.id} style={style.view}>
            <TouchableWithoutFeedback onPress={() => dispatch(decrement(prods.item))}>
                <View>
                    <AntDesign name="closesquareo" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <Image style={style.image} source={{ uri: prods.item.producto.imagen }} />
            <Text style={style.text} >{prods.item.producto.name}</Text>
            <Text>
                <MaterialIcons name="attach-money" size={18} color="black" />
                <Text style={{ margin: 2, fontSize: 16 }}>
                    {prods.item.producto.Precio}
                </Text>
            </Text>
            <Text style={{ fontSize: 14, margin: 6,fontWeight: 'bold', backgroundColor: '#bde2e9', borderRadius: 4 }} >
                Total: {prods.item.producto.Precio * prods.item.cantidad}
            </Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableWithoutFeedback onPress={() => dispatch(incrementCantidad(prods.item))}>
                    <View >
                        <AntDesign name="pluscircleo" size={24} color="black" style={{margin:4}} />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={{alignSelf:"center", fontSize: 18 }}>{prods.item.cantidad}</Text>
                <TouchableWithoutFeedback onPress={() => dispatch(decrementarCantidad(prods.item))}>
                    <View>
                        <AntDesign name="minuscircleo" size={24} color="black" style={{margin:4}} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default ProducCarrito

const style = StyleSheet.create({
    text: {
        fontSize: 14,
    },
    view: {
        marginLeft: 2
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4
    },
})
