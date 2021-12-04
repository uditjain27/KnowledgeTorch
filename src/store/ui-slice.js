import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: 'uiSlice',
  initialState: {
    isLoading : false
  },
  reducers: {
    setLoading: function (state) {
      state.isLoading = !state.isLoading;
      console.log(state.isLoading);
    }
  }
});

export const UISliceActions = UISlice.actions;

export default UISlice;