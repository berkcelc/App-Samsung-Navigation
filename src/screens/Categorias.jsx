import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {colores} from '../global/colores'
import CategoriasData from '../data/CategoriasData.json'

const Categorias = ({ navigation}) => {

  const mostrarCategorias = ({item}) => (
    <TouchableOpacity Categorias={item} style={styles.BotonCategoria} onPress={() => navigation.navigate("Productos", {item})}>
      <Text style={styles.BotonCategoriaTexto}>{item}</Text> 
    </TouchableOpacity>
  )

  return (
    <View style={styles.CategoriasContainer}>
      <Text style={styles.CategoriasTitulo}>Categorias</Text>
      <FlatList 
      renderItem={mostrarCategorias}
      keyExtractor={(item) => item}
      data={CategoriasData}/>
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
    height: '100%'
  },
  CategoriasTitulo: {
    color: colores.Lily,
    fontSize: 30,
    fontFamily: 'Quicksand-Light',
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
    fontFamily: 'Quicksand-Regular',
    fontSize: 24,
    color: colores.Fucsia
  }

})