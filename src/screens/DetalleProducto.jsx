import { StyleSheet, Text, View } from 'react-native'
import { colores } from '../global/colores'
import { useEffect, useState } from 'react'
import Productos from '../data/Productos.json'

const DetalleProducto = ({route}) => {
    const [productoSeleccionado, setProductoSeleccionado] = useState({})
    const productID = route.params

useEffect(() => {
  const productoEncontrado = Productos.find(producto => producto.id === productID)
  setProductoSeleccionado(productoEncontrado)
}, [productID])

  return (
    <View style={styles.DetalleProductoContainer}>
      <ScrollView >
      <Image source={{ uri: productoSeleccionado.Imagenes[0] }} resizeMode='cover'/>

              <View style={styles.ProductoContainer}>
                <Text style={styles.ProductoNombre}>{productoSeleccionado.nombre}</Text>
                <Text style={styles.ProductoPrecio}>$ {productoSeleccionado.precio}</Text>
              </View>
            </ScrollView>
    </View> )}

export default DetalleProducto

const styles = StyleSheet.create({
  DetalleProductoContainer:{
    width: '100%',
    height: '100%',
    backgroundColor: colores.Fondo,
    flexDirection: 'row'
  }
})