import { configureStore } from '@reduxjs/toolkit';
import sidebar from './sidebar/sidebarSlice';
import partners from './partners/partnersSlice';

export const store = configureStore({
  reducer: {
    sidebar,
    partners
  },
})