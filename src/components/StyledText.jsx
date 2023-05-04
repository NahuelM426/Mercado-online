import react from "react";
import { Text,StyleSheet} from "react-native";

const style = StyleSheet.create({
    text : {
        fontSize:12,
        color:'grey'
    },
    bold:{
        fontWeight:'bold'
    },
    black:{
        color:'blue'
    },      
    big:{
        fontSize:20
    }
})

export default function StyledText ({bold,black,big}){
    const textStyles = [
        style.text,
        black && style.black,
        bold && style.bold,
        big && style.big
    ]
    return(
        <Text style={textStyles}>
            {Children}
        </Text>
    )
}