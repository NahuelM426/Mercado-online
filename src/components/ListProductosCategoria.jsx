import react, { useEffect, useState } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native";
import ListProductosCategoriaEspecífico from "./ListProductosCategoriaEspecífico";
import Manaos from "./img/manaos.jpg"
import Cocacola from "./img/cocacola.jpg"
import Evian from "./img/evian.jpg"
import Fanta from "./img/fanta.jpg"
import Voss from "./img/voss.jpg"
import Fiji from "./img/fiji.jpg"


const ListProductosCategoria = (props) => {

  // const [Productos, setProductos] = useState([])

  
  useEffect(() => {
    // const fetchProduc = async () => {
    //   const produc = await global.fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]')
    //   const json = await produc.json()
    //   setProductos(json)
    // }
    // fetchProduc()
    // console.log("ListaDeProductoProds", props)
  }, [])

  const CategoriasConSubd = {
    "CategoriasSubd": [
      {
        "IdCategoria": 15, "Categoria": { "idCategoria": 1 }, "name": "Aguas", "Productos": [{
          "IdProducto": 22, "Categoria": 1, "name": "Evian", "Precio": 200, "imagen": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
        },
        {
          "IdProducto": 34, "Categoria": 1, "name": "Voss", "Precio": 500, "imagen": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
        },
        {
          "IdProducto": 28, "Categoria": 1, "name": "Feji", "Precio": 300, "imagen": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg "
        }]
      }, {
        "IdCategoria": 25, "Categoria": { "idCategoria": 1 }, "name": "Gaseosas", "Productos": [{
          "IdProducto": 21, "Categoria": 1, "name": "Cocacola", "Precio": 500, "imagen": "https://lachimbotana.com.ar/wp-content/uploads/2020/06/CocaCola-sinAzucar500-60x60.png"
        },
        {
          "IdProducto": 32, "Categoria": 1, "name": "Fanta", "Precio": 500, "imagen": "https://lachimbotana.com.ar/wp-content/uploads/2020/06/Fanta500ml-60x60.png"
        },
        {
          "IdProducto": 89, "Categoria": 1, "name": "Manaos", "Precio": 400, "imagen": "https://plataforma.supersimple.com.ar/Panelcontenidos/Contenidos/1629311711-0-0.jpg"
        }]
      },
    ]
  }
  //Cantida de Productos, Aca o backend


  const renderItem = ({ item }) => {
    return (
      <ListProductosCategoriaEspecífico
        item={item}
        navegacion={props}
      />
    );
  };
  return (
    <FlatList
      data={CategoriasConSubd.CategoriasSubd}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={renderItem}
    />
  )

}

export default ListProductosCategoria