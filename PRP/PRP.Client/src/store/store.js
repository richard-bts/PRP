import { configureStore } from '@reduxjs/toolkit';
import sidebar from './sidebar/sidebarSlice';
import partners from './partners/partnersSlice';
import users from './users/usersSlice';

export let store = null;

export default function getStore(incomingPreloadState) {
  store = configureStore({
    reducer: {
      sidebar,
      partners,
      users
    },
    preloadedState: incomingPreloadState
  });
  return store;
};