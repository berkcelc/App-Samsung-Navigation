import { configureStore } from "@reduxjs/toolkit";
import favsSlice from "../reducer/favsSlice";

export default configureStore({ reducer: {favsSlice} })