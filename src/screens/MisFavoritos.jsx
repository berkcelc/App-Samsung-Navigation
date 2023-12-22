import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colores } from '../global/colores'

const MisFavoritos = () => {
  return (
    <View style={styles.MisFavoritosContainer}>
      <Text style={styles.Titulo}>Mis Favoritos</Text>
    </View>
  )
}

export default MisFavoritos

const styles = StyleSheet.create({
  MisFavoritosContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  backgroundColor: colores.Fondo},
  Titulo: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
    color: colores.FucsiaFuerte,
    top: 40
  }
})