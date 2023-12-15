import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colores } from '../global/colores'

const Tarjeta = ({
  producto, onProductoSeleccionadoEvent
}) => {
  return (
    <TouchableOpacity onPress={()=> onProductoSeleccionadoEvent(producto.id)} style={styles.TarjetaContainer}>
      <Image style={styles.TarjetaImagen} resizeMode='cover' source={{ uri: productoSeleccionado.Imagenes[0] }}/>
      <Text style={styles.TarjetaTitulo}>{producto.nombre}</Text>
      <Text style={styles.TarjetaTexto}>{producto.precio}</Text>
    </TouchableOpacity> )}

export default Tarjeta

const styles = StyleSheet.create({
  TarjetaContainer: {
    width: 300,
    height: 350,
    backgroundColor: colores.RosaClaro,
    borderRadius: 25,
    margin: 10
  },
  TarjetaImagen: {
    width: 250,
    height: 200,
    position: 'relative'
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