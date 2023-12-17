import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colores } from '../global/colores'

const Tarjeta = ({ producto, navigation, item  }) => {
  return (
  
    <TouchableOpacity style={styles.TarjetaContainer} onPress={() => navigation.navigate("Detalle del Producto", {item: producto})} >
      {/* <Image style={styles.TarjetaImagen}source={{ uri: producto.ImgMiniatura }}/> */}
      <Text style={styles.TarjetaTitulo}>{producto.nombre}</Text>
      <Text style={styles.TarjetaTexto}>{producto.precio}</Text>
      </TouchableOpacity>
     
    )}

export default Tarjeta

const styles = StyleSheet.create({
  TarjetaContainer: {
    width: 300,
    height: 130,
    backgroundColor: colores.RosaClaro,
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    padding: 10
  },
  TarjetaImagen: {
    width: 250,
    height: 200
  },
  TarjetaTitulo: {
    color: colores.Lily,
    fontSize: 26,
    fontFamily: 'Quicksand-Light'
  },
  TarjetaTexto: {
    color: colores.Lily,
    fontSize: 24,
    fontFamily: 'Quicksand-Light'
  }
})