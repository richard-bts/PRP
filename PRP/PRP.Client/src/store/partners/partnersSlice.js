import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partners: [
    {
      id: '1',
      name: 'Partner 1',
      email: 'random@email.cdl',
      isActive: false,
      typesReport: ["API"]
    },
    {
      id: '2',
      name: 'Partner 2',
      email: 'partnerdemo@email.cdl',
      isActive: true,
      typesReport: ["API", "EXCEPTION"]
    },
    {
      id: '3',
      name: 'Partner 3',
      email: 'random4@email.cdl',
      isActive: true,
      typesReport: ["API", "EXCEPTION", "POD"]
    },
    {
      id: '4',
      name: 'Partner 4',
      email: 'random1@email.cdl',
      isActive: false,
      typesReport: ["API", "EXCEPTION", "POD", "SCAN AUDIT"]
    },
    {
      id: '5',
      name: 'Partner 5',
      email: 'part22nerdemo@email.cdl',
      isActive: false,
      typesReport: ["API"]
    },
    {
      id: '6',
      name: 'Partner 6',
      email: 'partnerdemo@email.cdl',
      isActive: true,
      typesReport: ["API", "EXCEPTION"]
    },
    {
      id: '7',
      name: 'Partner 7',
      email: 'partsdnerdemo@email.cdl',
      isActive: true,
      typesReport: ["API", "EXCEPTION", "POD"]
    },
    {
      id: '8',
      name: 'Partner 8',
      email: 'partffsnerdemo@email.cdl',
      isActive: false,
      typesReport: ["API", "EXCEPTION", "POD", "SCAN AUDIT"]
    },
    {
      id: '9',
      name: 'Partner 9',
      email: 'partnesfsardemo@email.cdl',
      isActive: true,
      typesReport: ["API"]
    },
    {
      id: '10',
      name: 'Partner 10',
      email: 'partnfsafsaerdemo@email.cdl',
      isActive: false,
      typesReport: ["API", "EXCEPTION"]
    },
    {
      id: '11',
      name: 'Partner 11',
      email: 'partneasfsafrdemo@email.cdl',
      isActive: true,
      typesReport: ["API", "EXCEPTION", "POD"]
    },
    {
      id: '12',
      name: 'Partner 12',
      email: 'partneasfsafrdemo@email.cdl',
      isActive: false,
      typesReport: ["API", "EXCEPTION", "POD", "SCAN AUDIT"]
    },
    {
      id: '13',
      name: 'Partner 13',
      email: 'sfasfsf@email.cdl',
      isActive: true,
      typesReport: ["API"]
    },
    {
      id: '14',
      name: 'Partner 14',
      email: 'safsafsf@email.cdl',
      isActive: false,
      typesReport: ["API", "EXCEPTION"]
    },
    {
      id: '15',
      name: 'Partner 15',
      email: 'partnerfffffdemo@email.cdl',
      isActive: true,
      typesReport: ["API", "EXCEPTION", "POD"]
    },
    {
      id: '16',
      name: 'Partner 16',
      email: 'ssssaa@email.cdl',
      isActive: true,
      typesReport: ["API", "EXCEPTION", "POD", "SCAN AUDIT"]
    },
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