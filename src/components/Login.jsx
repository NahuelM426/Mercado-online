import { View, Text, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { useDispatch } from "react-redux"
import {userGlob} from './Contador/CounterSlice'
const user = [
    {
        email: "nahuel@gmail.com",
        clave: 12345,
        rol: "admin"
    },
    {
        email: "nahuel2@gmail.com",
        clave: 12345,
        rol: "user"
    },
    {
        email: "nahuel3@gmail.com",
        clave: 12345,
        rol: "user"
    },
]
const Login = (navegacion) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {

        if (!validateEmail(email)) {
            alert("Error Por favor verifique el email")
            return;
        }else{
        }
        validarUsuario(email,password)
        console.log('Email:', email);
        console.log('Password:', password);

        navegacion.navigation.navigate("Categorias")
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validarUsuario = (email,password) => {
        user.map(u => {
           if(u.email == email && u.clave == password){
            console.log("Rol",u.rol)
            dispatch(userGlob(u.rol))
            return u.rol
           } 
        })
    }
    return (
        <View>
            <TextInput
                style={{ padding: 10, width: 400, backgroundColor: "#c0c4b9", borderRadius: 4, margin: 4 }}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={handleEmailChange}
            />
            <TextInput
                style={{ padding: 10, width: 300, backgroundColor: "#c0c4b9", borderRadius: 4, margin: 4 }}
                placeholder="Contraseña"
                secureTextEntry={true}
                value={password}
                onChangeText={handlePasswordChange}
            />
            <Button
                style={{ width: 300, borderRadius: 4 }}
                title="Enviar"
                onPress={handleSubmit} />
        </View>
    );

}

export default Login;