import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Input } from '../components/Input/input';

export default function Index() {
  return (
    <>
      <ImageBackground
        source={require(`../assets/images/Fundo.png`)}
        style={styles.ImgFundo}
      >
        <Image
          source={require(`../assets/images/Logo.png`)}
          style={styles.logo}
        ></Image>
      </ImageBackground>

      <View style={styles.container}>
        <Text style={styles.titulo}> Consulte seu CEP </Text>
      </View>

      <Input/>
    </>
  );
}

const styles = StyleSheet.create({
  ImgFundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: `100%`,
    height: `100%`,
  },

  logo: {
    width: 100,
    height: 120,
  },

  container: {
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    gap: 40,
  },

  titulo: {
    fontSize: 25,
  },
});
