export const initialPartnerState = {
  name: '',
  email: '',
  isActive: false,
  typesReport: [
    {
      status: false,
      type: 'POD'
    },
    {
      status: false,
      type: 'SCAN AUDIT'
    },
    {
      status: false,
      type: 'EXCEPTION'
    },
    {
      status: false,
      type: 'CLEAR'
    }
  ]
};

export const partnersPerPage = [5, 10, 15, 20, 30, 40, 50];