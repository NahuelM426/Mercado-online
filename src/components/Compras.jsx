import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import ProducCarrito from "./ProducCarrito";
import { useSelector } from "react-redux"
import { Button } from "react-native";
import { vaciar } from './Contador/CounterSlice'
import { useDispatch } from "react-redux"

const Compras = (prods) => {
    const dispatch = useDispatch();
    const compras = useSelector((state) => state.counter);
    const [productos, setProductos] = useState([])
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(12);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(-10);
    const [shadowRadius, setShadowRadius] = useState(1);
    const [shadowOpacity, setShadowOpacity] = useState(0.3);
    const [shadowOffsetWidthB, setShadowOffsetWidthB] = useState(-4);
    const [shadowOffsetHeightB, setShadowOffsetHeightB] = useState(-6);

    useEffect(() => {
        console.log("Props Carrito", compras.value)
        if (compras != null) {
            setProductos(compras)
        }
    }, [])

    const totalapagar = () => {
        const cantidad = compras.value.map(e => {
            const cantid = e.cantidad * e.producto.Precio
            return cantid
        })
        return cantidad.reduce((a, b) => a + b, 0);
    }

    return (
        <View >
            <View style={[style.text,
            {
                shadowOffset: {
                    width: shadowOffsetWidthB,
                    height: -shadowOffsetHeightB,
                },
                shadowOpacity,
                shadowRadius,
            },]} >
                <Text style={style.text} >Subtotal: {totalapagar()}</Text>
            </View>
            <ScrollView >
                <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", padding: 20, marginTop: 8 }}>
                    {!compras.value
                        ? console.log("NULL", null)
                        : compras.value.map((unCategoria, index) => {
                            return (
                                <View key={index} style={[style.square, {
                                    shadowOffset: {
                                        width: shadowOffsetWidth,
                                        height: -shadowOffsetHeight,
                                    },
                                    shadowOpacity,
                                    shadowRadius,
                                    margin: 3
                                }
                                ]}>
                                    <ProducCarrito
                                        item={unCategoria}
                                        navegacion={prods}
                                    />
                                </View>)
                        })}

                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-around", position: "relative", alignItems: "flex-end", }}>
                <Button
                    onPress={() => dispatch(vaciar())}
                    title="Vaciar"
                    color="#841584"

                />
                <Button
                    onPress={() => alert("Mercado Libre")}
                    title="Confirmar"
                    color="#841584"

                />
            </View>
        </View>
    )

}
export default Compras
const style = StyleSheet.create({
    square: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        height: 230,
        shadowColor: 'black',
        width: 120,
    },
    text: {
        fontSize: 20,
        margin: 6,
        fontWeight: 'bold',
        alignItems: "flex-end"
    },
    view: {
        marginLeft: 13
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4
    },
})