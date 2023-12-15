import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native'
import  {colores}  from '../global/colores'
import Categorias from '../screens/Categorias'
import ProductosPorCategoria from '../screens/ProductosPorCategoria'
import DetalleProducto from '../screens/DetalleProducto'


const Stack = createNativeStackNavigator()

const Navegation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Categorías' screenOptions={({ route}) => ({
          header: () => null })}>
            <Stack.Screen name='Categorías' component={Categorias}/>
            <Stack.Screen name='Productos' component={ProductosPorCategoria}/>
            <Stack.Screen name='Detalle del Producto' component={DetalleProducto}/>
        </Stack.Navigator>
    </NavigationContainer>
  )}

export default Navegation

const styles = StyleSheet.create({
    NavegationContainer: {
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colores.Fucsia}
})