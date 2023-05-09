import React, { useEffect } from "react";
import {View} from "react-native";
import ProdExpecifico from "./ProdExpecifico";
const ListasDeProdExpecifico = (props) => {
    const item = props.route.params.props.item.Productos

    useEffect(() => {
        //Buscar Todos los productos de esa categoria
        // console.log("Props", props)
    }, [])


    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", padding: 1, marginTop: 8}}>
            {!item
                ? console.log("NULL", null)
                : item.map((unCategoria, index) => {
                    return (
                        <View>
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