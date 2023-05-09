import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";


const CategoriaItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.navegacion.navigation.navigate("Productos")} >
                <View >
                    <Image style={style.image} source={{ uri: props.item.imagen }} />
                    <Text> {props.item.name}</Text>
                </View>
        </TouchableWithoutFeedback >
    )
}
export default CategoriaItem

const style = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    black: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4
    },
})