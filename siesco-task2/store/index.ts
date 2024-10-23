import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [
    { name: "", actions: ["Get Started", "Speak to Sales"] },
    { name: "products", actions: ["View", "Edit"] },
    { name: "blogs", actions: ["View"] },
  ],
};

const slice = createSlice({
  initialState,
  name: "store",
  reducers: {},
});

const store = configureStore({
  reducer: slice.reducer,
});

export default store;
