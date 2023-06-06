import React,{useState} from "react";
import { View, Text, FlatList, TouchableWithoutFeedback,StyleSheet } from "react-native";
import ProducItem from "./ProductItem";

const ListProductosCategoriaEspecífico = (props) => {
    const item = props.item.Productos
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(-8);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(-10);
    const [shadowRadius, setShadowRadius] = useState(1);
    const [shadowOpacity, setShadowOpacity] = useState(0.3);
    const renderItem = ({ item }) => {
        return (
            <ProducItem
                item={item}
                navegacion={props}
            />
        );
    };
    //esto El conjunto de productos que tocas
    return (
        <TouchableWithoutFeedback onPress={() => props.navegacion.navigation.navigate("ListasExpecifico", { props: props })}>
            <View style={{
                shadowOffset: {
                    width: shadowOffsetWidth,
                    height: -shadowOffsetHeight,
                },
                shadowOpacity,
                shadowRadius,
            }}>
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

const style = StyleSheet.create({
    square: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        height: 230,
        shadowColor: 'black',
        width: 120,
    },})