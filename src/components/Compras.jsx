import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import ProducCarrito from "./ProducCarrito";
import { useSelector } from "react-redux"
import { Button } from "react-native";
import {vaciar } from './Contador/CounterSlice'
import { useDispatch } from "react-redux"

const Compras = (prods) => {
    const dispatch = useDispatch();
    const compras = useSelector((state) => state.counter);
    const [productos, setProductos] = useState([])

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
        <View>
            <View style={style.text} >
                <Text style={style.text} >Subtotal: {totalapagar()}</Text>
            </View>
            <ScrollView style={{ backgroundColor: "#faf9b9" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", padding: 1, marginTop: 8 }}>
                    {!compras.value
                        ? console.log("NULL", null)
                        : compras.value.map((unCategoria, index) => {
                            return (
                                <View>
                                    <ProducCarrito
                                        item={unCategoria}
                                        navegacion={prods}
                                    />
                                </View>)
                        })}
                </View>
                <View style={{ flexDirection: "row",alignItems: "flex-start", justifyContent: "space-around", flexWrap: "wrap",margin: 30,marginVertical:50 }}>
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
            </ScrollView>
        </View>
    )

}
export default Compras
const style = StyleSheet.create({
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