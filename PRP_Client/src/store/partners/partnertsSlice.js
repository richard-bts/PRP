import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partners: [
    {
      id: 0,
      name: 'Partner 1',
      email: 'example123@email.cdl',
      isActive: true,
      typesReport: ["POD", "API"]
    },
    {
      id: 1,
      name: 'Partner 2',
      email: 'email@email.cdl',
      isActive: true,
      typesReport: ["SCAN AUDIT"]
    },
    {
      id: 2,
      name: 'Partner 3',
      email: 'thisismyemail@email.cdl',
      isActive: false,
      typesReport: ["EXCEPTION"]
    }
  ],
  activePartner: {}
};

export const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    addPartner: (state, action) => {
      state.partners = action.payload;
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

export const { addPartner, editPartner, removePartner, setActivePartner } = partnersSlice.actions;

export default partnersSlice.reducer;