// Books slice reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooksAPI, getBookById } from "./booksAPI";


export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (params) => {
    return await fetchBooksAPI(params);
  }
);

export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async (id) => {
    return await getBookById(id);
  }
);


const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: {
      data: null,
      status: "idle",
      error: null,
    },
    bookDetails: {
      data: null,
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* ---------- book list---------- */
      .addCase(fetchBooks.pending, (state) => {
        state.books.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books.status = "succeeded";
        state.books.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.books.status = "failed";
        state.books.error = action.error.message;
      })

      /* ---------- fetch book by id ---------- */
      .addCase(fetchBookById.pending, (state) => {
        state.bookDetails.status = "loading";
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.bookDetails.status = "succeeded";
        state.bookDetails.data = action.payload;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.bookDetails.status = "failed";
        state.bookDetails.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
