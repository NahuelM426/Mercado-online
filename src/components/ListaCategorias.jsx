import {StyleSheet,View} from "react-native";
import CategoriaItem from "./CategoriaItem";


const CategoriasConSubd = [
    {
        "IdCategoria": 1, "IdPr": null, "name": "Bebidas", "imagen": "https://rickandmortyapi.com/api/character/avatar/1.jpeg", "CategoriasSubd": [
            {
                "IdCategoria": 1, "Categoria": { "idCategoria": 1 }, "name": "Aguas", "Productos": [{
                    "IdProducto": 1, "Categoria": 1, "name": "Agua", "Precio": 200, "imagen": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                }]
            }
        ]
    },
    {
        "IdCategoria": 1, "IdPr": null, "name": "Bazar", "imagen": "https://rickandmortyapi.com/api/character/avatar/1.jpeg", "CategoriasSubd": [
            {
                "IdCategoria": 2, "Categoria": { "idCategoria": 1 }, "name": "Aguas", "Productos": [{
                    "IdProducto": 2, "Categoria": 2, "name": "Evian", "Precio": 300, "imagen": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                }]
            }
        ]
    }
]


const ListaCategoria = (props) => {
  
    return (
        <View style={{flexDirection:"row",}}>
           {!CategoriasConSubd
            ? console.log("NULL", null)
            : CategoriasConSubd.map((unCategoria, index) => {
                return (
            <View index style={{  margin: 8 }} >
                <CategoriaItem
                    item={unCategoria}
                    navegacion={props}
                />
            </View>)
            })}
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
})