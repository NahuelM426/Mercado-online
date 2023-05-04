import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableWithoutFeedback } from "react-native";
import ProducItem from "./ProductItem";

const ListProductosCategoriaEspecífico = (props) => {
    const item = props.item.Productos

    const renderItem = ({ item }) => {
        return (
            <ProducItem
                item={item}
                navegacion={props}
            />
        );
    };
    const hola = "hola"
    //esto El conjunto de productos que tocas
    return (
        <TouchableWithoutFeedback onPress={() => props.navegacion.navigation.navigate("ListasExpecifico", { props: props })}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>{props.item.name}</Text>
                <View>
                    <FlatList
                        horizontal
                        data={item}
                        ItemSeparatorComponent={() => <Text> </Text>}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}
export default ListProductosCategoriaEspecífico