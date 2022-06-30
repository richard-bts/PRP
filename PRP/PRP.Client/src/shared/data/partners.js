export const initialPartnerState = {
  partnerName: '',
  email: '',
  active: 0,
  reportName: [
    {
      status: false,
      type: 'POD'
    },
    {
      status: false,
      type: 'SCAN'
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

export const reportTypesTest = [
  {
    status: false,
    type: 'POD'
  },
  {
    status: false,
    type: 'SCAN'
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

export const partnersPerPage = [5, 10, 15, 20, 30, 40, 50];