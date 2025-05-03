import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const toggleMenuSlice = createSlice({
  name: 'sideMenu', 
  initialState,
  reducers: {
    handleToggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleToggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
