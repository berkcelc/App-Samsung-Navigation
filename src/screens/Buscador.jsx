import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import Productos from '../data/Productos.json'
import { StyleSheet } from 'react-native';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { colores } from '../global/colores';
import Tarjeta from '../components/Tarjeta';

const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarProductos = (texto) => {
    const resultadosFiltrados = Productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(texto.toLowerCase())
    );
    setResultados(resultadosFiltrados);
  };

  const resetearBusqueda = () => {
    setBusqueda('')
    setResultados([])}

    const mostrarProductos = ({ item}) => {
      return <Tarjeta producto={item} />;
    };

  return (
    <View style={styles.BuscadorContainer}>
      <Text style={styles.Titulo}>Buscar productos</Text>
      <View style={styles.CasillaBusqueda}>
      <TextInput 
        placeholder="Buscar..." value={busqueda}
  onChangeText={(texto) => { setBusqueda(texto); buscarProductos(texto) }} />
      <View style={styles.SeparadorBotones}>
            <TouchableOpacity onPress={()=>{buscarProductos(busqueda)}}>
                <EvilIcons name="search" size={34} color={colores.FucsiaFuerte} />
            </TouchableOpacity>
            <TouchableOpacity onPress={resetearBusqueda}>
                <Entypo name="cross" size={34} color={colores.FucsiaFuerte} />
            </TouchableOpacity>
            </View>
            </View>
      <FlatList 
        data={resultados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={mostrarProductos}
      />
    </View>
  )
}

export default Buscador


const styles = StyleSheet.create({
  BuscadorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colores.Fondo
  },
  Titulo: {
    color: colores.Lily,
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    marginTop: 50
  },
  CasillaBusqueda: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingLeft: 30
  },
  SeparadorBotones: {
    paddingLeft: 220,
    flexDirection: 'row'
  }

 })