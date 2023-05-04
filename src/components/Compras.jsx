import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ScrollView, StyleSheet } from "react-native";
import ProducCarrito from "./ProducCarrito";
import { useSelector } from "react-redux"


const Compras = (prods) => {

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
            <Text style={style.text} >Total: {totalapagar()}</Text>
            <ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap",padding:1,marginTop:8 }}>
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
            </ScrollView>
        </View>
    )

}
export default Compras
const style = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 6,
        fontWeight: 'bold'
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