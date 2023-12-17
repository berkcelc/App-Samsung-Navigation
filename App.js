import { useFonts } from "expo-font";
import Navegation from "./src/components/Navegation";

export default function App() {
  useFonts({
    'Quicksand-Light': require('./assets/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('./assets/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('./assets/Quicksand-Bold.ttf')})
  return ( <Navegation/> )}