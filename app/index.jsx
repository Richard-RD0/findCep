import { ImageBackground } from "expo-image"
import { Text, View, StyleSheet, Image } from "react-native"
import { Input } from "../components/input/Input"
import { Botao } from "../components/botao/botao"
import { Card } from  '../components/Card/card'
import { ScrollView } from "react-native"

export default function Index() {
  return (
    <>
      {/* Logo + imagem de fundo */}
      <ImageBackground
        source={require("../assets/images/ImgFundo.png")}
        style={styles.ImagemFundo}
      >
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        ></Image>
      </ImageBackground>
      {/* Campo de consulta */}
      <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        {/* 2.1. Título */}
        <Text style={styles.titulo}>Consulte seu CEP</Text>
        {/* 2.2. Input */}
        <Input/>
        {/* 2.3. Botão */}
        <Botao tituloBotao='Consultar'/>
        {/* 2.4. Card de informações */}
        <Card/>
      </View>
      </ScrollView>
    </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
  ImagemFundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 100,
    height: 120,
  },
  container: {
   
    alignItems: "center",
    width: '100%',
    minHeight:'100%',
    gap: 40,  
  },
  containerScroll: {
    flex: 1.5,
    paddingBottom: 50,
    paddingTop: 50,
    height: '100%',
    paddingBottom: 80,



  },
  titulo: {
    fontSize: 25
  },
})