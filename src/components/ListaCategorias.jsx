import { StyleSheet, View } from "react-native";
import CategoriaItem from "./CategoriaItem";
import React, { useState } from "react";


const CategoriasConSubd = [
    {
        "IdCategoria": 1, "IdPr": null, "name": "Bebidas", "imagen": "https://cdn-icons-png.flaticon.com/512/1308/1308307.png", "CategoriasSubd": [
            {
                "IdCategoria": 1, "Categoria": { "idCategoria": 1 }, "name": "Aguas", "Productos": [{
                    "IdProducto": 1, "Categoria": 1, "name": "Agua", "Precio": 200, "imagen": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                }]
            }
        ]
    },
    {
        "IdCategoria": 1, "IdPr": null, "name": "Bazar", "imagen": "https://www.shutterstock.com/image-vector/bazaar-rubber-stamp-grunge-seal-260nw-1461593039.jpg", "CategoriasSubd": [
            {
                "IdCategoria": 2, "Categoria": { "idCategoria": 1 }, "name": "Aguas", "Productos": [{
                    "IdProducto": 2, "Categoria": 2, "name": "Evian", "Precio": 300, "imagen": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                }]
            }
        ]
    }
]


const ListaCategoria = (props) => {
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(12);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(-10);
    const [shadowOffsetWidthB, setShadowOffsetWidthB] = useState(-4);
    const [shadowOffsetHeightB, setShadowOffsetHeightB] = useState(-6);
    const [shadowRadius, setShadowRadius] = useState(1);
    const [shadowOpacity, setShadowOpacity] = useState(0.3);

    const Listar = () => {
        const ListaDeCategoria = CategoriasConSubd.map((unCategoria,index) =>
            <View key={index}  
            style={[style.square,
            {
                shadowOffset: {
                    width: shadowOffsetWidth,
                    height: -shadowOffsetHeight,
                },
                shadowOpacity,
                shadowRadius,
                margin: 3,
            }
            ]} 
            >
            <CategoriaItem
                item={unCategoria}
                navegacion={props}
            />
            </View>
        )
        return ListaDeCategoria
    }
    return (
        <View style={{ flexDirection: "row", }}>
            {!CategoriasConSubd
                ? console.log("NULL", null)
                : Listar()}
        </View>
    )

}
export default ListaCategoria
const style = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'grey'
    },
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
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
    square: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        height: 130,
        shadowColor: 'black',
        width: 120,
    }
})