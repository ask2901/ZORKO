import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import restaurantSlice from './slices/restaurantSlice'
import uiReducer from './slices/scrollSlice';

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    restaurant:restaurantSlice,
    ui:uiReducer,
  },
})