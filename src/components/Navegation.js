import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {colores}  from '../global/colores'
import ProductosNavegation from './ProductosNavegation'
import MisFavoritos from '../screens/MisFavoritos';
import Buscador from '../screens/Buscador';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Navegation = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.BarraNavegacion}}>
            <Tab.Screen 
            name='StackProductos'
            component={ProductosNavegation}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="cellphone-link" size={24} color={colores.Fucsia} />
              )
          }}/>
              <Tab.Screen 
            name='Mis Favoritos'
            component={MisFavoritos}
            options={{
              tabBarIcon: () => (
                <AntDesign name="staro" size={24} color={colores.Fucsia} />
              )
          }}/>
              <Tab.Screen 
            name='Buscador'
            component={Buscador}
            options={{
              tabBarIcon: () => (
                <FontAwesome name="search" size={24} color={colores.Fucsia} />
              )
          }}/>
          </Tab.Navigator>
      </NavigationContainer> )}

export default Navegation

const styles = StyleSheet.create({
    BarraNavegacion: {
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        position: 'absolute',
        justifyContent: 'space-around',
        backgroundColor: colores.Fondo}
})