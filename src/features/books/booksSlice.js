// Books slice reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooksAPI } from "./booksAPI";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (params) => {
    return await fetchBooksAPI(params);
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
