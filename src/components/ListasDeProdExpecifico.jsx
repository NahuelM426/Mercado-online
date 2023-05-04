import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import ProdExpecifico from "./ProdExpecifico";
const ListasDeProdExpecifico = (props) => {
    const item = props.route.params.props.item.Productos

    useEffect(() => {
        //Buscar Todos los productos de esa categoria
        // console.log("Props", props)
    }, [])


    return (
        <View style={{ flexDirection: "row"}}>
            {!item
                ? console.log("NULL", null)
                : item.map((unCategoria, index) => {
                    return (
                        <View style={{margin: 8}} >
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