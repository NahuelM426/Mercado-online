import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Platform, Image, ScrollView, TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const CargarProducto = () => {

    const [imagen, setImagen] = useState(null)


    useEffect(() => {
        validarPermisos()
    }, [])

    const validarPermisos = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permiso Denegado!')
            }
        }
    }
    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [5, 4],
            quality: 1
        })
        console.log(result)
        if (!result.canceled) {
            setImagen(result.uri)
        }
    }
    const Camara = async () => {
        let result = await ImagePicker.launchCameraAsync({

        })
        console.log(result)
        if (!result.canceled) {
            setImagen(result.uri)
        }
    }


    return (
        <ScrollView style={{marginRight: 6, margin: 2, }} >
            <Text
                style={{ fontWeight: 'bold'}}
            >Cargar Producto</Text>
            <View style={{ justifyContent: "space-around", flexWrap: "wrap" }}>
                <Text
                    style={{ fontWeight: 'bold', }}
                >Nombre</Text>
                <TextInput
                    style={{ padding: 10, width: 400, backgroundColor: "#c0c4b9", borderRadius: 4, margin: 4 }}
                    placeholder="Nombre..."
                />
                <Text
                    style={{ fontWeight: 'bold', marginRight: 6, margin: 2 }}
                >Categoria</Text>
                <TextInput
                    style={{ padding: 10, width: 400, backgroundColor: "#c0c4b9", borderRadius: 4, margin: 4 }}
                    placeholder="Categoria..."
                />
                <Text
                    style={{ fontWeight: 'bold', marginRight: 6, margin: 2 }}
                >Precio</Text>
                <TextInput
                    style={{ padding: 10, width: 400, backgroundColor: "#c0c4b9", borderRadius: 4, margin: 4 }}
                    placeholder="Precio..."
                />
                <Text
                    style={{ fontWeight: 'bold', marginRight: 6, margin: 2 }}
                >Imagen del producto</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableWithoutFeedback onPress={Camara}>
                        <View>
                            <AntDesign name="camera" size={24} style={{ margin: 4 }} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={PickImage}>
                        <View>
                            <Entypo name="archive" size={24} style={{ margin: 4 }} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {imagen && <Image source={{ uri: imagen }} style={{
                width: 200,
                height: 200,
                flexDirection: "row",
                borderRadius: 6,
            }} />}

        </ScrollView>
    )
}

export default CargarProducto