import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {
            id: 1,
            title: "Love Bangladesh",
            author: "Anisul Islam"
        },
        {
            id: 2,
            title: "Bangladeshi",
            author: "Anisul Islam"
        },
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    }
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;