import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {colores} from '../global/colores'
import { setCategoriaSeleccionada } from '../reducer/favsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Categorias = ({navigation}) => {

  const dispatch = useDispatch()
  const categorias = useSelector((state)=>state.favsSlice.categorias)

  const mostrarCategorias = ({item}) => (
    <TouchableOpacity Categorias={item} style={styles.BotonCategoria} onPress={() => { navigation.navigate("Productos", {item})
    dispatch(setCategoriaSeleccionada(item))}}>
      <Text style={styles.BotonCategoriaTexto}>{item}</Text> 
    </TouchableOpacity>
  )

  return (
    <View style={styles.CategoriasContainer}>
      <Text style={styles.CategoriasTitulo}>Categorias</Text>
      <FlatList 
      renderItem={mostrarCategorias}
      keyExtractor={(item) => item}
      data={categorias}/>
    </View>
  )
}

export default Categorias

const styles = StyleSheet.create({
  CategoriasContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: colores.Fondo
  },
  CategoriasTitulo: {
    color: colores.Lily,
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    marginTop: 30
  },
  BotonCategoria: {
    backgroundColor: colores.RosaClaro,
    borderRadius: 25,
    padding: 10,
    margin: 10,
    alignItems: 'center'
  },
  BotonCategoriaTexto: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 24,
    color: colores.Fucsia
  }

})