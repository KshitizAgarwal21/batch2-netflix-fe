import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  data: 0,
  res: "",
};
let finalDur;
export const updateDuration = createAsyncThunk(
  "updateDuration",
  async (params) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/currentlyviewing/addCurrent/",
        { id: params.id, durationWatched: finalDur }
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const valueSlice = createSlice({
  name: "value",
  initialState: initialState,

  reducers: {
    setValue: (state, action) => {
      state.data = action.payload;
      finalDur = state.data;
    },
  },
  extraReducers: {
    [updateDuration.fulfilled]: (state, { payload }) => {
      state.res = payload;
    },
    [updateDuration.pending]: (state) => {},
    [updateDuration.rejected]: (state, { payload }) => {
      state.res = payload;
    },
  },
});

export const { setValue } = valueSlice.actions;

export default valueSlice.reducer;
