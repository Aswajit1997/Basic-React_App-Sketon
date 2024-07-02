import { configureStore } from "@reduxjs/toolkit";
import tempSlice from "./slice/tempSlice";

export const store = configureStore({
	reducer: {
		temp: tempSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
