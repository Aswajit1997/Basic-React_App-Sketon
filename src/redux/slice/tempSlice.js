import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isPopupOpen: false,
	type: "",
};

const tempSlice = createSlice({
	name: "tempSlice",
	initialState,
	reducers: {
		setPopup: (state, { payload }) => {
			state.isPopupOpen = payload.state;
			state.type = payload.type;
		},
	},
});

export const { setPopup } = tempSlice.actions;

export default tempSlice.reducer;
