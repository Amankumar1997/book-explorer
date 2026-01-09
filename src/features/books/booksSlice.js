import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default booksSlice.reducer;
