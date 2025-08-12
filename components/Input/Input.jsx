import { Styleshet, Text, TextInput } from "react-native-web";

export const Input = () => {
   return(
    <view style={StyleS.CampoInput}>
        <Text style={styles.label}> CEP </Text> 

           <TextInput>
            Placeholder= 
            style={styles.Input}
            maxLength=(8) 
            </TextInput> 
            </view>

   )
}

const styles = Styleshet.create({
    CampoInput:{
    width: ' 70% '    
},
    Input : {
     borderbottomwidth: 1,
     borderbottomcolor: '#939393',
     color :  '#939393' , 
     pading: 5,
     outlinestyle: 'NOME'
    }
})