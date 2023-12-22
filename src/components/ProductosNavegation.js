import { StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categorias from '../screens/Categorias'
import DetalleProducto from '../screens/DetalleProducto'
import ProductosPorCategoria from '../screens/ProductosPorCategoria'

const Stack = createNativeStackNavigator()

const ProductosNavegation = () => {
  return (
    <Stack.Navigator
    initialRoute="Categorias"
    screenOptions={() => ({
        header: () => null })}>
        <Stack.Screen name="Categorías" component={Categorias}/>
        <Stack.Screen name="Detalle del producto" component={DetalleProducto}/>
        <Stack.Screen name="Productos" component={ProductosPorCategoria}/>
    </Stack.Navigator>
  )
}

export default ProductosNavegation

const styles = StyleSheet.create({})