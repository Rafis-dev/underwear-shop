import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLORS_URL } from '../const';

export const fetchColor = createAsyncThunk(
  'color/fetchColor',

  async () => {
    const response = await fetch(COLORS_URL);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  colorList: [],
  status: 'idle',
  error: null,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchColor.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchColor.fulfilled, (state, action) => {
        state.status = 'success';
        state.colorList = action.payload;
      })
      .addCase(fetchColor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default colorSlice.reducer;
