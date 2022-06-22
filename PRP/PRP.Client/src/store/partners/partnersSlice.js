import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partners: [
    {
      id: '1',
      name: 'Partner Demo',
      email: 'partnerdemo@email.cdl',
      isActive: false,
      typesReport: ["API"]
    }
  ],
  activePartner: {},
  isLoading: false
};

export const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    startFetchPartners: (state) => {
      state.isLoading = true;
    },
    setPartners: (state, action) => {
      console.log("setPartners", action);
      console.log("state", state);
    },
    finishFetchPartners: (state) => {
      state.isLoading = false;
    },
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

export const { startFetchPartners, finishFetchPartners ,addPartner, editPartner, removePartner, setActivePartner, filterPartners } = partnersSlice.actions;

export default partnersSlice.reducer;