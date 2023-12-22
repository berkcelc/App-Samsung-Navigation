import { useFonts } from "expo-font";
import Navegation from "./src/components/Navegation";
import { Provider } from "react-redux";
import Store from "./src/store/Store";

export default function App() {
  useFonts({
    'Quicksand-Light': require('./assets/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('./assets/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('./assets/Quicksand-Bold.ttf')})
  return ( 
    <Provider store={Store}>
  <Navegation/> 
  </Provider>
  )}