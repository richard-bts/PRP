import { createSlice } from '@reduxjs/toolkit';
import { getPartners } from './thunks';

const initialState = {
  activePartner: {},
  activedSort: false,
  error: false,
  isLoading: false,
  namedSort: false,
  openForm: false,
  currentPage: 1,
  partnersPerPage: 15,
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
      const { client_id, partner_id, partner_name, partner_emails, partner_active, partner_report_types } = action.payload;
      const partner = state.partners.find(item => item.partnerId === partner_id);
      if (partner) {
        partner.active = partner_active;
        partner.clientId = client_id;
        partner.email = partner_emails;
        partner.partnerId = partner_id;
        partner.partnerName = partner_name;
        partner.reportName = partner_report_types;
      } else {
        const { partner_emails, partner_name, partner_report_types, partner_active, partner_id, client_id, id } = action.payload;
        state.partners.push({
          clientId: client_id,
          id,
          active: partner_active,
          email: partner_emails,
          partnerId: partner_id,
          partnerName: partner_name,
          reportName: partner_report_types
        });
      }
    },
    setActivePartner: (state, action) => {
      state.activePartner = action.payload ? action.payload : null;
    },
    setOpenForm: (state, action) => {
      state.openForm = action.payload;
    },
    setPartnersPerPage: (state, action) => {
      state.partnersPerPage = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    sortBypartnerName: (state) => {
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
        state.partners = action.payload.map( partner => {
          return {
            id: partner.id,
            clientId: partner.client_id,
            partnerId: partner.partner_id,
            partnerName: partner.partner_name,
            email: partner.partner_emails,
            active: partner.partner_active,
            reportName: partner.partner_report_types
          };
        });
      })
      .addCase(getPartners.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setLoading, addPartner, setPartnersPerPage, setCurrentPage, setActivePartner, filterPartners, setOpenForm, sortByName, sortByActive } = partnersSlice.actions;

export default partnersSlice.reducer;