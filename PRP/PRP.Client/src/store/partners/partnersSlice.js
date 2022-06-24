import { createSlice } from '@reduxjs/toolkit';
import { getPartners } from './thunks';

const initialState = {
  activePartner: null,
  isLoading: false,
  error: false,
  openForm: false,
  activedSort: false,
  namedSort: false,
  newPartners: [],
  partners: [
    {
      id: '1',
      name: 'Partner 1',
      email: 'random@email.cdl',
      isActive: false,
      typesReport: [
        {
          status: true,
          type: 'POD'
        },
        {
          status: false,
          type: 'SCAN AUDIT'
        },
        {
          status: true,
          type: 'EXCEPTION'
        },
        {
          status: false,
          type: 'CLEAR'
        }
      ]
    },
    {
      id: '2',
      name: 'Partner 2',
      email: 'partnerdemo@email.cdl',
      isActive: true,
      typesReport: [
        {
          status: true,
          type: 'POD'
        },
        {
          status: false,
          type: 'SCAN AUDIT'
        },
        {
          status: true,
          type: 'EXCEPTION'
        },
        {
          status: false,
          type: 'CLEAR'
        }
      ]
    }
  ] 
};

export const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPartners: (state, action) => {
      state.partners = action.payload;
    },
    addPartner: (state, action) => {
      const { id, name, email, isActive, typesReport } = action.payload;
      const partner = state.partners.find(item => item.id === id);
      if (partner) {
        partner.name = name;
        partner.email = email;
        partner.isActive = isActive;
        partner.typesReport = typesReport;
      } else {
        state.partners.push(action.payload);
      }
    },
    setActivePartner: (state, action) => {
      state.activePartner = action.payload ? action.payload : null;
    },
    removePartner: (state, action) => {
      state.partners = state.partners.filter(partner => partner.id !== action.payload);
    },
    setOpenForm: (state, action) => {
      state.openForm = action.payload;
    },
    sortByName: (state) => {
      state.namedSort = !state.namedSort;
      state.activedSort = false;
      state.partners = [...state.partners].sort((a, b) => {
        if (!state.namedSort) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
        } else {	
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
        }
        return 0;
      });
    },
    sortByActive: (state) => {
      state.activedSort = !state.activedSort;
      state.namedSort = false;
      state.partners = [...state.partners].sort((a, b) => {
        if (!state.activedSort) {
          if (a.isActive < b.isActive) {
            return -1;
          }
          if (a.isActive > b.isActive) {
            return 1;
          }
        } else {	
          if (a.isActive > b.isActive) {
            return -1;
          }
          if (a.isActive < b.isActive) {
            return 1;
          }
        }
        return 0;
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPartners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPartners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newPartners = action.payload;
      })
      .addCase(getPartners.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setLoading, addPartner, removePartner, setActivePartner, filterPartners, setOpenForm, sortByName, sortByActive } = partnersSlice.actions;

export default partnersSlice.reducer;