import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaCategoria from './src/components/ListaCategorias';
import ListProductosCategoria from './src/components/ListProductosCategoria';
import ListProductosCategoriaEspecífico from './src/components/ListProductosCategoriaEspecífico';
import ListasDeProdExpecifico from './src/components/ListasDeProdExpecifico';
import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Compras from './src/components/Compras';


import {useSelector} from "react-redux"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function Categorias() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={ListaCategoria} />
            <Stack.Screen name="Productos" component={ListProductosCategoria} />
            <Stack.Screen name="ProductosPorCategoria" component={ListProductosCategoriaEspecífico} />
            <Stack.Screen name="ListasExpecifico" component={ListasDeProdExpecifico} />
            <Stack.Screen name='Compras' component={Compras} />
        </Stack.Navigator>
    );
}

function MyTabs() {
    const compras = useSelector((state) => state.counter);
    console.log("compras",compras)
    return (
        <Tab.Navigator
            initialRouterName="Home"
            screenOptions={{
                tabBarActiveTintColor: "purple"
            }}>
            <Tab.Screen
                name="Home"
                component={Categorias}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Carrito"
                component={Compras}
                options={{
                    tabBarLabel: 'Carrito',
                    tabBarBadge: compras.value.length,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-cart" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default function Navegacion() {

    return (
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
    )
}