import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pending: true,
  error: false,
  users: [
    {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      avatar: ''
    }
  ],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await await fetch(
    "https://reqres.in/api/users"
  );
  const { data } = await response.json(); 
  console.log(data);
  return await data;
});


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.pending = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
})

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
