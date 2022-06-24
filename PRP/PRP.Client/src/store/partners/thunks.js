import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'http://172.24.32.132/Xcelerator/CDLPRP/api/partner';

export const getPartners = createAsyncThunk("partners/getPartners", async() => {
  const response = await await fetch(`${baseURL}/getPartners`);
  const { result } = await response.json();
  return await result;
});
