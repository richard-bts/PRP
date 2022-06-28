import { createSlice } from '@reduxjs/toolkit';
import { getPartners } from './thunks';

const initialState = {
  activedSort: false,
  error: false,
  isLoading: false,
  namedSort: false,
  openForm: false,
  partnersPerPage: 5,
  partners: []
};

export const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addPartner: (state, action) => {
      const { partnerId, partnerName, email, active, reportName } = action.payload;
      const partner = state.partners.find(item => item.id === partnerId);
      if (partner) {
        partner.partnerName = partnerName;
        partner.email = email;
        partner.active = active;
        partner.reportName = reportName;
      } else {
        state.partners.push(action.payload);
      }
    },
    setActivePartner: (state, action) => {
      state.activePartner = action.payload ? action.payload : null;
    },
    removePartner: (state, action) => {
      state.partners = state.partners.filter(partner => partner.partnerId !== action.payload);
    },
    setOpenForm: (state, action) => {
      state.openForm = action.payload;
    },
    setPartnersPerPage: (state, action) => {
      state.partnersPerPage = action.payload;
    },
    sortByName: (state) => {
      state.namedSort = !state.namedSort;
      state.activedSort = false;
      state.partners = [...state.partners].sort((a, b) => {
        if (!state.namedSort) {
          if (a.partnerName < b.partnerName) {
            return -1;
          }
          if (a.partnerName > b.partnerName) {
            return 1;
          }
        } else {	
          if (a.partnerName > b.partnerName) {
            return -1;
          }
          if (a.partnerName < b.partnerName) {
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
          if (a.active < b.active) {
            return -1;
          }
          if (a.active > b.active) {
            return 1;
          }
        } else {	
          if (a.active > b.active) {
            return -1;
          }
          if (a.active < b.active) {
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
        state.partners = action.payload;
      })
      .addCase(getPartners.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setLoading, addPartner, removePartner, setPartnersPerPage, setActivePartner, filterPartners, setOpenForm, sortByName, sortByActive } = partnersSlice.actions;

export default partnersSlice.reducer;