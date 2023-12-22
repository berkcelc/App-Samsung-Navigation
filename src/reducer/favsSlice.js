import { createSlice } from "@reduxjs/toolkit"
import CategoriasData from '../data/CategoriasData.json'
import Productos from '../data/Productos.json'

export const favsSlice = createSlice({
    name:"favs",
    initialState:  {
        categoriaSeleccionada: "",
        productoSeleccionado: 0,
        categorias: CategoriasData, 
        productos: Productos,
        productosFiltrados: []   },
        reducers: {
            setCategoriaSeleccionada: (state, action) => {
                state.categoriaSeleccionada = action.payload
                state.productosFiltrados = state.productos.filter(producto => producto.categoria === state.categoriaSeleccionada)
            },
            setProductoSeleccionado: (state, action) => {
                state.productoSeleccionado = action.payload
            }}})
export const { setCategoriaSeleccionada, setProductoSeleccionado} = favsSlice.actions
export default favsSlice.reducer