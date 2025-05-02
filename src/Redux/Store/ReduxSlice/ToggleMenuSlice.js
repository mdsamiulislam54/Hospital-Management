import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
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
