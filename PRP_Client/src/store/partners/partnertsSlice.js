import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partners: [{
    id: 0,
    name: 'Partner 1',
    email: 'example123@email.cdl',
    isActive: true,
    typesReport: ["POD", "API"]
  }],
  activePartner: {}
};

export const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    addPartner: ( state, action ) => {
      state.partners = action.payload;
    },
    setActivePartner: (state, action) => {
      state.activePartner = action.payload ? action.payload : {};
    },
    editPartner: (state, action) => {
      state.partners = state.partners.map( partner => partner.id === action.payload.id ? action.payload : partner );
    },
    removePartner: (state, action) => {
      state.partners = state.partners.filter(partner => partner.id !== action.payload);
    }
  },
});

export const { addPartner, editPartner, removePartner, setActivePartner } = partnersSlice.actions;

export default partnersSlice.reducer;