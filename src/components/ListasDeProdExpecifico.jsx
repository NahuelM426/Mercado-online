import React, { useEffect,useState } from "react";
import {View,StyleSheet} from "react-native";
import ProdExpecifico from "./ProdExpecifico";

const ListasDeProdExpecifico = (props) => {
    const item = props.route.params.props.item.Productos
    
    const [shadowRadius, setShadowRadius] = useState(1);
    const [shadowOpacity, setShadowOpacity] = useState(0.3);
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(12);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(-10);

    useEffect(() => {
        //Buscar Todos los productos de esa categoria
        console.log("Props", item)
    }, [])


    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", padding: 1, marginTop: 8}}>
            {!item
                ? console.log("NULL", null)
                : item.map((unCategoria, index) => {
                    return (
                        <View key={index} style={[
                            style.square,
                            {
                                shadowOffset: {
                                    width: shadowOffsetWidth,
                                    height: -shadowOffsetHeight,
                                },
                                shadowOpacity,
                                shadowRadius,
                                margin: 3
                            },
                        ]}>
                            <ProdExpecifico
                                item={unCategoria}
                                navegacion={props}
                            />
                        </View>)
                })}
        </View>
    )
}
export default ListasDeProdExpecifico
const style = StyleSheet.create({
    square: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        height: 160,
        shadowColor: 'black',
        width: 120,
    },
})