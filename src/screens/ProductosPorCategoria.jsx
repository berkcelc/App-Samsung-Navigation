import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Productos from '../data/Productos.json'
import Tarjeta from '../components/Tarjeta'
import { colores } from '../global/colores'

const ProductosPorCategoria = ({ Navegacion, route }) => {
    const [productosPorCategoria, setProductosPorCategoria] = useState([])
    const {categoria} = route.params

    useEffect(() => {
      const productosFiltrados = Productos.filter(producto => producto.categoria === categoria)
      setProductosPorCategoria(productosFiltrados)}, [categoria])

    const mostrarProductos = ({ item }) => {
      return <Tarjeta producto={item} Navegacion={Navegacion} />;
    };
    

  return (
    <View style={styles.ProductosContainer}>
      <Text style={styles.ProductosTítulo}>Productos Por Categoria</Text>
      <FlatList 
      renderItem={mostrarProductos}
      keyExtractor={producto => producto.id}
      data={productosPorCategoria}/>
    </View> )}

export default ProductosPorCategoria

const styles = StyleSheet.create({
  ProductosContainer: {
    flex: 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colores.Lila,
    width: '100%',
    height: '100%'
  },
  ProductosTítulo: {
    color: colores.Lily,
    fontSize: 20,
    fontFamily: 'Quicksand-Light',
    marginTop: 30
  },
 
})