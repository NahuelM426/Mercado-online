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
import CargarProducto from './src/components/CargarProducto'
import { AntDesign } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


import {useSelector} from "react-redux"
import Login from './src/components/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Categorias = () => {
    return (
        // <Drawer.Navigator>
        //     <Drawer.Screen name="Categorias" component={ListaCategoria} />
        // </Drawer.Navigator>
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={ListaCategoria} />
            <Stack.Screen name="Productos" component={ListProductosCategoria} />
            <Stack.Screen name="ProductosPorCategoria" component={ListProductosCategoriaEspecífico} />
            <Stack.Screen name="ListasExpecifico" component={ListasDeProdExpecifico} />
            <Stack.Screen name='Compras' component={Compras} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CargarProducto" component={CargarProducto}/>
        </Stack.Navigator>
    );
}

const MyTabs = ({userRole}) => {
    const compras = useSelector((state) => state.counter);
    console.log("userRole",compras.user)
    return (
        <Tab.Navigator
            initialRouterName="Home"
            screenOptions={{
                tabBarActiveTintColor: "purple"
            }}
            >
            <Tab.Screen
                name="Home"
                component={Categorias}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false,
                    tabBarVisible: true,
                    tabBarAccessibilityLabel: 'Home',
                    tabBarAccessibilityHint: 'Ir a la pantalla de inicio',
                    tabBarAccessibilityRole: 'button',
                    tabBarAccessibilityState: { selected: true },
                    tabBarAccessibilityValue: { min: 0, max: 1, now: 0.5 },
                    tabBarTestID: 'homeTab',
                    tabBarBadge: null,
                    tabBarBadgeStyle: { backgroundColor: 'red' },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveBackgroundColor: 'white',
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                }}
            />
            <Tab.Screen
                name="Carrito"
                component={Compras}
                options={{
                    tabBarVisible: true,
                    tabBarLabel: 'Carrito',
                    tabBarBadge: compras.value.length,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-cart" size={size} color={color} />
                    ),
                    tabBarVisible: true,
                }}
            />
                <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    ),
                    tabBarVisible: true,
                    tabBarAccessibilityLabel: 'Login',
                    tabBarAccessibilityHint: 'Ir a la pantalla de Login',
                    tabBarAccessibilityRole: 'button',
                    tabBarAccessibilityState: { selected: true },
                    tabBarAccessibilityValue: { min: 0, max: 1, now: 0.5 },
                    tabBarTestID: 'homeTab',
                    tabBarBadge: null,
                    tabBarBadgeStyle: { backgroundColor: 'red' },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveBackgroundColor: 'white',
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                }}
            />
            {/* {compras.user == 'admin' && ( */}
                <Tab.Screen
                name="Cargar"
                component={CargarProducto}
                // listeners={({navigation,route}) => ({ -- Esto es para diferenciar usuarios
                //     tabPress: (e) => {
                //         console.log("Onpres",compras)
                //         if(compras.user == 'admin'){
                //             navigation.navigate('Cargar');
                //         }
                        
                //         e.preventDefault();
                //     },
                // })}
                options={{
                    tabBarLabel: 'Cargar',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="cloudupload" size={24} color="black" />
                        ),
                        tabBarVisible: true,
                    }}
                    />
        {/* )} */}
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