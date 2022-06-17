import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebar/sidebarSlice';
import partnertsReducer from './partners/partnertsSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    partners: partnertsReducer,
  },
})