import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partners: [
    {
      id: 1,
      name: 'Partner Demo',
      email: 'partnerdemo@email.cdl',
      isActive: false,
      typesReport: ["API"]
    }
  ],
  activePartner: {}
};

export const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    addPartner: (state, action) => {
      state.partners = [ ...state.partners, action.payload ];
    },
    setActivePartner: (state, action) => {
      state.activePartner = action.payload ? action.payload : {};
    },
    editPartner: (state, action) => {
      state.partners = state.partners.map(partner => partner.id === action.payload.id ? action.payload : partner);
    },
    removePartner: (state, action) => {
      state.partners = state.partners.filter(partner => partner.id !== action.payload);
    }
  },
});

export const { addPartner, editPartner, removePartner, setActivePartner, filterPartners } = partnersSlice.actions;

export default partnersSlice.reducer;