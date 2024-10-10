import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabBarVisible: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showTabBar: (state) => {
      state.tabBarVisible = true;
    },
    hideTabBar: (state) => {
      state.tabBarVisible = false;
    },
  },
});

export const { showTabBar, hideTabBar } = uiSlice.actions;

export const selectTabBarVisibility = (state) => state.ui.tabBarVisible;

export default uiSlice.reducer;