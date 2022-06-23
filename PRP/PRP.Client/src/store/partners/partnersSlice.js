import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePartner: null,
  isLoading: false,
  openForm: false,
  activedSort: false,
  namedSort: false,
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
    },
    {
      id: '3',
      name: 'Partner 3',
      email: 'random4@email.cdl',
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
    },
    {
      id: '4',
      name: 'Partner 4',
      email: 'random1@email.cdl',
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
      id: '5',
      name: 'Partner 5',
      email: 'part22nerdemo@email.cdl',
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
      id: '6',
      name: 'Partner 6',
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
    },
    {
      id: '7',
      name: 'Partner 7',
      email: 'partsdnerdemo@email.cdl',
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
    },
    {
      id: '8',
      name: 'Partner 8',
      email: 'partffsnerdemo@email.cdl',
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
      id: '9',
      name: 'Partner 9',
      email: 'partnesfsardemo@email.cdl',
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
    },
    {
      id: '10',
      name: 'Partner 10',
      email: 'partnfsafsaerdemo@email.cdl',
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
      id: '11',
      name: 'Partner 11',
      email: 'partneasfsafrdemo@email.cdl',
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
    },
    {
      id: '12',
      name: 'Partner 12',
      email: 'partneasfsafrdemo@email.cdl',
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
      id: '13',
      name: 'Partner 13',
      email: 'sfasfsf@email.cdl',
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
    },
    {
      id: '14',
      name: 'Partner 14',
      email: 'safsafsf@email.cdl',
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
      id: '15',
      name: 'Partner 15',
      email: 'partnerfffffdemo@email.cdl',
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
    },
    {
      id: '16',
      name: 'Partner 16',
      email: 'ssssaa@email.cdl',
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
    },
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
      
    },
    addPartner: (state, action) => {
      state.partners = [ ...state.partners, action.payload ];
    },
    setActivePartner: (state, action) => {
      state.activePartner = action.payload ? action.payload : null;
    },
    editPartner: (state, action) => {
      state.partners = state.partners.map(partner => partner.id === action.payload.id ? action.payload : partner);
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
});

export const { setLoading, addPartner, editPartner, removePartner, setActivePartner, filterPartners, setOpenForm, sortByName, sortByActive } = partnersSlice.actions;

export default partnersSlice.reducer;